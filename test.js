'use strict';
var assert = require('power-assert');
var chromeWebStoreItemPropertyCli = require('./');

it('should ', function () {
  assert.strictEqual(chromeWebStoreItemPropertyCli('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(chromeWebStoreItemPropertyCli('unicorns'), 'unicorns & wrong');
});
