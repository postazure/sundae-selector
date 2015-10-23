import React from 'react'
import Steps from './steps.js'
import OptionSelector from './option-selector.js'

export default class Customizer extends React.Component  {
  render() {
    return (
      <div>
        <Steps data={this.props.data} />
        <OptionSelector data={this.props.data} activeStep={0}/>
      </div>
    )
  }
}
