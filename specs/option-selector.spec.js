import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import OptionSelector from '../public/scripts/option-selector.js'
import FixtureData from '../fixtures/data.js'

describe('Option Selector', () => {
  let optionSelector;
  let data;

  beforeEach(()=>{
    data = (new FixtureData).customizations();
    optionSelector = TestUtils.renderIntoDocument(
        <OptionSelector data={data} activeStep={0}/>
    );
  });

  it('should display the choices for Container Step', () => {
    let choiceNodes = TestUtils.scryRenderedDOMComponentsWithClass(optionSelector, 'user-choice');
    let choices = choiceNodes.map((choice) => {
      return(choice.innerText)
    });

    let choicesFromData = [];
    data[0].selections.forEach((choiceGroup) => {
      choiceGroup.choices.forEach((choice) => {
        let name = choice.name;
          choicesFromData.push(name);
        expect(choices).toContain(name);
      })
    });
    expect(choices.length).toEqual(8);
  });

  it('should contain two groups of choices', () =>{
    let choiceGroupNodes = TestUtils.scryRenderedDOMComponentsWithClass(optionSelector, 'user-choices');
    expect(choiceGroupNodes.length).toEqual(2);
  });

});
