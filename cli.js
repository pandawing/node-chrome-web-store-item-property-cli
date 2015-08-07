#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var chromeWebStoreItemProperty = require('chrome-web-store-item-property');

var cli = meow({
  help: [
    'Usage',
    '  $ chrome-web-store-item-property-cli [identifier]',
    '',
    'Examples',
    '  $ chrome-web-store-item-property-cli nimelepbpejjlbmoobocpfnjhihnpked',
    '  ponies & rainbows'
  ]
});

if (cli.input.length < 1) {
  console.error('Identifier for Chrome Web Store required');
  process.exit(1);
}

chromeWebStoreItemProperty(cli.input[0])
  .then(function (value) {
    console.log(JSON.stringify(value));
  }).catch(function (err) {
    console.error(err.message);
    process.exit(1);
  });
