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

    it("should display a preview of the chosen options", () => {
      expect(!! TestUtils.findRenderedDOMComponentWithClass(customizer, 'preview')).toBe(true)
    })
  });

  describe("Changing Steps", () =>{
    describe("when the user clicks on a different Step", () => {
      beforeEach(() => {
        let nextStepButton = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'step')[1];
        TestUtils.Simulate.click(nextStepButton);
      });

      it("shows the new Step as active", () => {
        let activeStep = TestUtils.findRenderedDOMComponentWithClass(customizer, 'active step');
        expect(activeStep.innerText).toContain("Ice Cream")
      });

      it("displays the options for the active Step", () => {
        let optionNodes = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice');
        let options = optionNodes.map((option) => {
          return (option.innerHTML)
        });

        expect(
          helper.matchArray(
            options, ['Vanilla', 'Chocolate', 'Pumpkin', 'Rocky Road', 'Coffee']
          )
        ).toBe(true)
      })
    });
  });

  describe("Selecting Options", () => {
    it("should maintain selected options between steps ", () => {
      let steps = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'step')
      let stepOne = steps[0];
      let stepTwo = steps[1];
      let stepThree = steps[2];

      TestUtils.Simulate.click(stepOne);
      let sizes = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice');
      TestUtils.Simulate.click(sizes[1]);

      TestUtils.Simulate.click(stepTwo);
      let flavors = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice');
      TestUtils.Simulate.click(flavors[0]);
      TestUtils.Simulate.click(flavors[1]);
      TestUtils.Simulate.click(flavors[2]);

      TestUtils.Simulate.click(stepThree);
      let sauces = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice');
      TestUtils.Simulate.click(sauces[0]);

      TestUtils.Simulate.click(stepOne);
      let selectionStep1 = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice')[1];
      expect(selectionStep1.outerHTML).toContain('teal');

      TestUtils.Simulate.click(stepTwo);
      let selectionStep2 = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice');
      expect(selectionStep2[0].outerHTML).toContain('teal');
      expect(selectionStep2[1].outerHTML).toContain('teal');
      expect(selectionStep2[3].outerHTML).toContain('teal');

      TestUtils.Simulate.click(stepThree);
      let selectionStep3 = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice');
      expect(selectionStep3[0].outerHTML).toContain('teal');
    });
  });
});
