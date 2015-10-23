import React from 'react'
import Option from './option.js'

export default class OptionGroup extends React.Component  {

  componentWillMount () {
    this.state = {selectedOptions: []};
  }

  componentDiDMount() {
    this.setState({selectedOptions: this.props.globalOptions});
  }

  setOptionAsActiveForGroup(option) {
    let isSelected = (this.state.selectedOptions.indexOf(option) > -1);

    if (isSelected) {
      this.removeFromSelectedOptions(option);
    } else {
      this.addToSelectedOptions(option);
    }

    let exceedsAllowableCount = (this.state.selectedOptions.length > this.props.group.allowableCount);
    if (exceedsAllowableCount) { this.removeFromSelectedOptions(this.state.selectedOptions[0]); }

    console.log('groups selectedOptions', this.state.selectedOptions);
  }

  addToSelectedOptions(option) {
    this.state.selectedOptions.push(option);
    this.setState({selectedOptions: this.state.selectedOptions})
  }

  removeFromSelectedOptions(option) {
    let index = this.state.selectedOptions.indexOf(option);
    this.state.selectedOptions.splice(index, 1);
    this.setState({selectedOptions: this.state.selectedOptions})
  }

  render() {
    let innerHTML = this.props.group.choices.map((userOption) => {
      let isActive = (this.state.selectedOptions.indexOf(userOption) > -1);
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
