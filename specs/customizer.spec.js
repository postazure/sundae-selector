import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Helper from './support/helper.js'
import Customizer from '../public/scripts/customizer.js'
import FixtureData from '../fixtures/data.js'

const helper = new Helper;
describe('Features', () => {
  let customizer;
  let data;

  beforeEach(()=>{
    data = (new FixtureData).customizations();
    customizer = TestUtils.renderIntoDocument(<Customizer data={data} />);
  });

  describe("Initial Load", () => {
    it('should display four options', () => {
      let titlesNodes = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'title');
      let titles = titlesNodes.map((title) => {
        return (title.innerHTML)
      });

      expect(
        helper.matchArray(
          titles, ['Container', 'Ice Cream', 'Sauces', 'Toppings']
        )
      ).toBe(true)
    });

    it("should display the first step as active by default", () => {
      let activeStep = TestUtils.findRenderedDOMComponentWithClass(customizer, 'active step');
      expect(activeStep.innerText).toContain('Container')
    });
  });

  describe("Changing Steps", () =>{
    describe("when the user clicks on a different Step", () => {
      it("shows the new Step as active", () => {
        let nextStepButton = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'step')[1];
        TestUtils.Simulate.click(nextStepButton);

        let activeStep = TestUtils.findRenderedDOMComponentWithClass(customizer, 'active step');
        expect(activeStep.innerText).toContain("Ice Cream")
      });
    });
  });
});
