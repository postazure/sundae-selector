import React from 'react'

export default class Customizer extends React.Component  {
  render() {
    let customizations = this.props.data.map((customization) => {
      return(
        <div className="step">
          <div className="content">
            <div className="title">{customization.name}</div>
            <div className="description">Verify order details</div>
          </div>
        </div>
      );
    });

    return (
      <div className="ui ordered steps">
        {customizations}
      </div>
    )
  }
}
