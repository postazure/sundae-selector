import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Helper from './support/helper.js'
import OptionSelector from '../public/scripts/option-selector.js'
import FixtureData from '../fixtures/data.js'

const helper = new Helper;
describe('Option Selector', () => {
  let optionSelector;
  let data;
  let activeStep = 0;

  beforeEach(()=>{
    data = (new FixtureData).customizations();
    optionSelector = TestUtils.renderIntoDocument(
      <OptionSelector
        data={data}
        activeStep={activeStep}
        setGlobalUserSelection={()=>{}}
        selectedOptions={{}}
      />
    );
  });

  it('should display the choices for Container Step', () => {
    let choiceNodes = TestUtils.scryRenderedDOMComponentsWithClass(optionSelector, 'user-choice');
    let choices = choiceNodes.map((choice) => {return(choice.innerText)});

    let choicesFromData = [];
    data[0].selections.forEach((choiceGroup) => {
      choiceGroup.choices.forEach((choice) => {
        choicesFromData.push(choice.name);
      })
    });

    expect(helper.matchArray(choicesFromData, choices)).toBe(true)
  });

  it('should contain two groups of choices', () =>{
    let choiceGroupNodes = TestUtils.scryRenderedDOMComponentsWithClass(optionSelector, 'user-choices');
    expect(choiceGroupNodes.length).toEqual(2);
  });
});
