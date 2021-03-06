import React from 'react'
import Steps from './steps/steps.js'
import OptionSelector from './option-selector/option-selector.js'
import Preview from './preview/preview.js'

export default class Customizer extends React.Component  {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      userSelections: {},
      cost: 0
    };
    this.setActiveStep = this.setActiveStep.bind(this);
    this.setUserSelection = this.setUserSelection.bind(this);
  }

  setActiveStep(stepNum) {
    this.setState({activeStep: stepNum});
  }

  setUserSelection(key, selectedOptions) {
    let cloneOfUserSelections = (JSON.parse(JSON.stringify(this.state.userSelections)));
    cloneOfUserSelections[key] = selectedOptions;

    this.setState({userSelections: cloneOfUserSelections});
  }

  render() {
    return (
      <div>
        <Steps data={this.props.data} setActiveStep={this.setActiveStep} activeStep={this.state.activeStep}/>
        <OptionSelector
          data={this.props.data}
          activeStep={this.state.activeStep}
          setGlobalUserSelection={this.setUserSelection}
          selectedOptions={this.state.userSelections}
        />
        <Preview selectedOptions={this.state.userSelections} />
      </div>
    )
  }
}
