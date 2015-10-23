import React from 'react'

export default class Steps extends React.Component  {
  handleClick() {
    this.props.setActiveStep(this.props.stepId);
  }

  render() {
    let name = this.props.step.name;
     return (
        <a
          className={(this.props.isActive) ? "active step" : "step"}
          onClick={this.handleClick.bind(this)}>
          <div className="content">
            <div className="title">{name}</div>
            <div className="description">Verify order details</div>
          </div>
        </a>
     )
  }
}
