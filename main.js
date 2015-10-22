import React from 'react'
import Customizer from './public/scripts/customizer.js'
import FixtureData from './fixtures/data.js'

let fixtures = new FixtureData;
const data = fixtures.customizations();

React.render((
  <Customizer data={data} />
), document.getElementById('selector'));
