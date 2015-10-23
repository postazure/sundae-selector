import React from 'react'

export default class Option extends React.Component  {
  handleClick(){
    this.props.setOptionAsActive(this.props.userOption);
  }

  render() {
    let classes = "ui raised segment user-choice";
    if (this.props.isActive) {classes = "ui raised teal segment user-choice"}

    return(
      <div className={classes} onClick={this.handleClick.bind(this)}>
        <h4 className="ui image">
          {this.props.userOption.name}
          <img src={"http://lorempixel.com/100/100/food/1"}/>
        </h4>
      </div>
    );
  }
};
