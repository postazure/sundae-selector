import React from 'react'

export default class Steps extends React.Component  {
  render() {
    let customizations = this.props.data.map((customization) => {
      return(
        <div className={(this.props.data.indexOf(customization) === 0) ? "active step" : "step"}>
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
