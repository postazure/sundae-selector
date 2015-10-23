import React from 'react'
import Step from './step.js'

export default class Steps extends React.Component  {
  render() {
    let steps = this.props.data.map((step) => {
      let id = this.props.data.indexOf(step);
      return(
        <div>
          <Step stepId={id} step={step} isActive={id === this.props.activeStep} setActiveStep={this.props.setActiveStep}/>
        </div>
      );
    });

    return (
      <div className="ui ordered steps">
        {steps}
      </div>
    )
  }
}
