import React from 'react'
import Option from './option.js'

export default class OptionSelector extends React.Component  {
  constructor() {
    super();
    this.state = {selectedOptions: []};
  }

  setOptionAsActive(option) {
    this.state.selectedOptions.push(option);
    this.forceUpdate()
  }

  render() {
    let i = this.props.activeStep;
    let optionGroups = this.props.data[i].selections.map((optionGroup) => {
      let innerHTML = optionGroup.choices.map((userOption) => {
        let isActive = (this.state.selectedOptions.indexOf(userOption) > -1);
        return(
          <Option
            userOption={userOption}
            isActive={isActive}
            setOptionAsActive={this.setOptionAsActive.bind(this)}
          />
        );

      });

      return(
        <div className="ui tiny images user-choices">
          {innerHTML}
        </div>
      )
    });

    return (
      <div className="ui segment">
        {optionGroups}
      </div>
    )
  }
};
