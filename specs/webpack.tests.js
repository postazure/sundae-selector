// *Some* environments (phantomjs) don't have es5 (Function.prototype.bind)
require('babel-core/polyfill');

var context = require.context('.', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
module.exports = context;
