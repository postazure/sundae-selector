import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Customizer from '../public/scripts/customizer.js'
import FixtureData from '../fixtures/data.js'
let fixtures = new FixtureData;

let page;
let setUpPage = (() => {
  page = document.createElement("DIV");
  page.setAttribute("id", 'test-content');
  document.body.appendChild(page);
  page = document.getElementById('test-content');
});

describe('Customizer', () => {
  beforeEach(()=>{
    let data = fixtures.customizations();

    setUpPage();
    React.render((
      <Customizer data={data} />
    ), document.getElementById('test-content'));
  });

  it('should display four options', () => {
    expect(page.innerText).toContain('Container');
    expect(page.innerText).toContain('Ice Cream');
    expect(page.innerText).toContain('Sauces');
    expect(page.innerText).toContain('Toppings');
  });

  it("should display the first step as active by default", () => {
    let activeStep = page.getElementsByClassName('active step')[0];
    expect(activeStep.innerText).toContain('Container')
  });

  describe('Container Step', () => {
    it('should display the choices for container', () => {
      let firstChoice = page.getElementsByClassName('user-choice')[0];
      expect(firstChoice.innerText).toContain('Small');
    })
  })
});
