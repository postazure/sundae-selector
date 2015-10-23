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
    describe("when user clicks on an option", () => {
      let mediumOption;
      
      beforeEach(() => {
        mediumOption = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice')[1];
        TestUtils.Simulate.click(mediumOption);
      });
      
      it("shows that the option has been selected", () => {
        expect(mediumOption.outerHTML).toContain('teal');
      });

      it("should only have upto 'N' options selected at a time", () => {
        expect(mediumOption.outerHTML).toContain('teal');

        let largeOption = TestUtils.scryRenderedDOMComponentsWithClass(customizer, 'user-choice')[2];
        TestUtils.Simulate.click(largeOption);

        expect(mediumOption.outerHTML).not.toContain('teal');
        expect(largeOption.outerHTML).toContain('teal');
      });

      it("should toggle an option as selected/unselected when clicked", () => {
        expect(mediumOption.outerHTML).toContain('teal');
        TestUtils.Simulate.click(mediumOption);
        expect(mediumOption.outerHTML).not.toContain('teal');
      });
    });
  });
});
