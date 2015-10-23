import React from 'react'
import OptionGroup from './option-group.js'

export default class OptionSelector extends React.Component  {
  render() {
    let i = this.props.activeStep;
    let optionGroups = this.props.data[i].selections.map((optionGroup) => {
      let name = optionGroup.name;
      let key = `${i}${name.replace(/\s/g, '-').toLowerCase()}`;
      return(
        <OptionGroup
          group={optionGroup}
          setGlobalUserSelection={this.props.setGlobalUserSelection}
          groupKey={key}
        />
      )
    });

    return (
      <div className="ui segment">
        {optionGroups}
      </div>
    )
  }
};
