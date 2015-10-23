import React from 'react'
import OptionGroup from './option-group.js'

export default class OptionSelector extends React.Component  {
  render() {
    let i = this.props.activeStep;
    let optionGroups = this.props.data[i].selections.map((optionGroup) => {
      return(
        <OptionGroup group={optionGroup} />
      )
    });

    return (
      <div className="ui segment">
        {optionGroups}
      </div>
    )
  }
};
