import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Helper from './../../support/helper.js'
import Preview from '../../../public/scripts/preview/preview.js'

const helper = new Helper;

describe('Preview Panel', () => {
  let preview;
  let data = {
    "0size": [
      {"name": "Small"}
    ]
  };

  beforeEach(() => {
    preview = TestUtils.renderIntoDocument(
      <Preview
        selectedOptions={data}
      />
    )
  });

  it("should display the choices a user has made", () => {
    let selectedOptions = TestUtils.scryRenderedDOMComponentsWithClass(preview, 'selected-option');
    expect(selectedOptions[0].innerText).toContain('Small');
  });
});
