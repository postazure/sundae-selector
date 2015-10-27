import React from 'react'

export default class Preview extends React.Component  {
  render() {
    let keys = Object.keys(this.props.selectedOptions || {});
    let selectedOptionsNodes = [];

    keys.forEach((key) => {
      this.props.selectedOptions[key].forEach((option) => {
        selectedOptionsNodes.push(
          <li className="selected-option">{option.name}</li>
        );
      });
    });

    return (
      <ul className="preview">
        {selectedOptionsNodes}
      </ul>
    )
  }
}
