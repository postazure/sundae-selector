import React from 'react'

export default class OptionSelector extends React.Component  {
  render() {

    let i = this.props.activeStep;
    let optionGroups = this.props.data[i].selections.map((optionGroup) => {
      let innerHTML = optionGroup.choices.map((userOption) => {
        let name = userOption['name'];
        return(
          <h4 className="ui medium image user-choice">
            {name}
            <img src={"http://lorempixel.com/100/100/food/" + Math.floor(Math.random()*10).toString()}/>
          </h4>
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
