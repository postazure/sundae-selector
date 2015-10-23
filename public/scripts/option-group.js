import React from 'react'
import Option from './option.js'

export default class OptionSelector extends React.Component  {
  constructor() {
    super();
    this.state = {selectedOptions: []};
  }

  setOptionAsActiveForGroup(option) {

    if (this.state.selectedOptions.indexOf(option) === -1) {
      this.state.selectedOptions.push(option);
    }
    //this.props.addOptionToActive(option);

    if (this.state.selectedOptions.length > this.props.group.allowableCount) {
      this.state.selectedOptions.shift();
      console.log('after removal', this.state.selectedOptions);
    }

    this.setState({selectedOptions: this.state.selectedOptions});
    //this.props.removeOptionToActive(oldOption)
  }

  render() {
    let innerHTML = this.props.group.choices.map((userOption) => {
      console.log('in render', this.state.selectedOptions);
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
