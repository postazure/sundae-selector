import React from 'react'
import Option from './option.js'

export default class OptionGroup extends React.Component  {
  constructor(props) {
    super();
    this.state = {
      groupSelections: []
    }
  }

  setOptionAsActiveForGroup(option) {
    this.toggleOption(option);
    this.validateAllowableCount();
    this.props.setGlobalUserSelection(this.props.groupKey, this.state.groupSelections);
  }

  addToSelectedOptions(option) {
    let cloneOfGroupSelections = (JSON.parse(JSON.stringify(this.state.groupSelections)));
    cloneOfGroupSelections.push(option);
    this.setState({groupSelections: cloneOfGroupSelections})
  }

  removeFromSelectedOptions(option) {
    let index = this.state.groupSelections.indexOf(option);
    let cloneOfGroupSelections = (JSON.parse(JSON.stringify(this.state.groupSelections)));
    cloneOfGroupSelections.splice(index, 1);
    this.setState({groupSelections: cloneOfGroupSelections})
  }

  toggleOption(option){
    let isSelected = (this.state.groupSelections.indexOf(option) > -1);
    if (isSelected) {
      this.removeFromSelectedOptions(option);
    } else {
      this.addToSelectedOptions(option);
    }
  }

  validateAllowableCount() {
    let exceedsAllowableCount = (this.state.groupSelections.length > this.props.group.allowableCount);
    if (exceedsAllowableCount) { this.removeFromSelectedOptions(this.state.groupSelections[0]); }
  }

  render() {
    let innerHTML = this.props.group.choices.map((userOption) => {
      let isActive = (this.state.groupSelections.indexOf(userOption) > -1);
      return (
        <Option
          userOption={userOption}
          isActive={isActive}
          setOptionAsActiveForGroup={this.setOptionAsActiveForGroup.bind(this)}
          />
      );
    });

    return(
      <div className="ui tiny images user-choices">
        {innerHTML}
      </div>
    )
  }
};
