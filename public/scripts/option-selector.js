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
            <img src="/images/wireframe/image-text.png"/>
          </h4>
        );
      });

      return(
        <div className="ui tiny images">
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
