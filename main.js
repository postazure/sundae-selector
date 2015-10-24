import React from 'react'
import ReactDOM from 'react-dom'
import Customizer from './public/scripts/customizer.js'
import FixtureData from './fixtures/data.js'

let fixtures = new FixtureData;
const data = fixtures.customizations();

ReactDOM.render((
  <Customizer data={data} />
), document.getElementById('selector'));
