import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Customizer from '../public/scripts/customizer.js'
import FixtureData from '../fixtures/data.js'

describe('Customizer', () => {
  let customizer;
  let data;

  beforeEach(()=>{
    data = (new FixtureData).customizations();
    customizer = TestUtils.renderIntoDocument(<Customizer data={data} />);
  });

  it('should display four options', () => {
    let titlesNodes = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'title');
    let titles = titlesNodes.map((title) => {
      return(title.innerHTML)
    });

    expect(titles).toContain('Container');
    expect(titles).toContain('Ice Cream');
    expect(titles).toContain('Sauces');
    expect(titles).toContain('Toppings');
  });

  it("should display the first step as active by default", () => {
    let activeStep = TestUtils.findRenderedDOMComponentWithClass(customizer, 'active step');
    expect(activeStep.innerText).toContain('Container')
  });
});
