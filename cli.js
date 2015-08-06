#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var chromeWebStoreItemPropertyCli = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ chrome-web-store-item-property-cli [input]',
    '',
    'Examples',
    '  $ chrome-web-store-item-property-cli',
    '  unicorns & rainbows',
    '',
    '  $ chrome-web-store-item-property-cli ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(chromeWebStoreItemPropertyCli(cli.input[0] || 'unicorns'));
