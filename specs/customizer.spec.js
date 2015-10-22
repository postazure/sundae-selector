import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Customizer from '../public/scripts/customizer.js'

let customizer;

describe('Customizer', () => {

  beforeEach(()=>{
    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(React.createElement(Customizer, { className: 'MyComponent' }, 'some child text'));
    customizer = shallowRenderer.getRenderOutput();
  });

  it('should display text', () => {
    expect(customizer.props.children).toEqual('Hello World');
  })
});
