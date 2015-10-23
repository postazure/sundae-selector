import React from 'react'
import Steps from './steps.js'
import OptionSelector from './option-selector.js'
import Preview from './preview.js'

export default class Customizer extends React.Component  {
  constructor() {
    super();
    this.state = {activeStep: 0};
    this.setActiveStep = this.setActiveStep.bind(this);
  }

  setActiveStep(stepNum) {
    this.setState({activeStep: stepNum});
  }

  render() {
    return (
      <div>
        <Steps data={this.props.data} setActiveStep={this.setActiveStep} activeStep={this.state.activeStep}/>
        <OptionSelector data={this.props.data} activeStep={this.state.activeStep}/>
        <Preview/>
      </div>
    )
  }
}
