import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Helper from './support/helper.js'
import OptionGroup from '../public/scripts/option-group.js'

const helper = new Helper;

let stub_setOptionsFromGroupToActive = (a,b) =>{};
stub_setOptionsFromGroupToActive = stub_setOptionsFromGroupToActive.bind(this);

describe('OptionGroup', () => {
  let optionGroup;
  let data = {
    "name": "Size",
    "allowableCount": 1,
    "choices": [
      {"name": "Small"},
      {"name": "Medium"},
      {"name": "Large"}
    ]
  };

  beforeEach(() => {
    optionGroup = TestUtils.renderIntoDocument(
      <OptionGroup
        group={data}
        setGlobalUserSelection={()=>{}}
        groupKey={'foo'}
        selectedOptions={[]}
      />
    )
  });

  describe("when user clicks on an option", () => {
    let mediumOption;
    beforeEach(() => {
      mediumOption = TestUtils.scryRenderedDOMComponentsWithClass(optionGroup, 'user-choice')[1];
      TestUtils.Simulate.click(mediumOption);
    });

    it("shows that the option has been selected", () => {
      expect(mediumOption.outerHTML).toContain('teal');
    });

    it("should only have upto 'N' options selected at a time", () => {
      expect(mediumOption.outerHTML).toContain('teal');

      let largeOption = TestUtils.scryRenderedDOMComponentsWithClass(optionGroup, 'user-choice')[2];
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
