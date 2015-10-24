import React from 'react'
import Option from './option.js'

export default class OptionGroup extends React.Component  {
  constructor(props) {
    super();
    this.state = {
      groupSelections: []
    };
    this.validateAllowableCount = this.validateAllowableCount.bind(this)
  }

  componentWillMount() {
    this.setState({groupSelections: this.props.selectedOptions})
  }

  setOptionAsActiveForGroup(option) {
    let optionsList = this.toggleOption(option, this.validateAllowableCount);
    this.setState({groupSelections: optionsList}, () => {
      this.props.setGlobalUserSelection(this.props.groupKey, this.state.groupSelections);
    });
  }

  addToSelectedOptions(option, groupOptions, validate) {
    groupOptions.push(option);
    return(validate(groupOptions));
  }

  removeFromSelectedOptions(option, groupOptions) {
    let index = groupOptions.indexOf(option);
    groupOptions.splice(index, 1);
    return(groupOptions);
  }

  toggleOption(option, validate){
    let cloneOfGroupSelections = (JSON.parse(JSON.stringify(this.state.groupSelections)));

    let isSelected;
    cloneOfGroupSelections.forEach((selection) => {
      if (selection.name === option.name) {isSelected = true;}
    });

    if (isSelected) {
      return(this.removeFromSelectedOptions(option, cloneOfGroupSelections));
    } else {
      return(this.addToSelectedOptions(option, cloneOfGroupSelections, validate));
    }
  }

  validateAllowableCount(options) {
    let exceedsAllowableCount = (options.length > this.props.group.allowableCount);
    if (exceedsAllowableCount) {
      options.shift();
    }
    return(options);
  }

  render() {
    let innerHTML = this.props.group.choices.map((userOption) => {
      let isActive;
      this.state.groupSelections.forEach((selectedOption) => {
        if (selectedOption.name === userOption.name) {isActive = true;}
      });

      return (
        <Option
          userOption={userOption}
          isActive={isActive}
          setOptionAsActiveForGroup={this.setOptionAsActiveForGroup.bind(this)}
          key={JSON.stringify(userOption)}
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
