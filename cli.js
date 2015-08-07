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
    '  $ chrome-web-store-item-property-cli nimelepbpejjlbmoobocpfnjhihnpked | python -mjson.tool',
    '  {',
    '    "id": "nimelepbpejjlbmoobocpfnjhihnpked",',
    '    "image": "https://ssl.gstatic.com/chrome/webstore/images/thumb.png",',
    '    "interactionCount": {',
    '      "UserDownloads": "421"',
    '    },',
    '    "name": "Do Not Merge WIP for GitHub",',
    '    "operatingSystems": "Chrome",',
    '    "price": "$0",',
    '    "priceCurrency": "USD",',
    '    "ratingCount": "2",',
    '    "ratingValue": "4.5",',
    '    "url": "https://chrome.google.com/webstore/detail/do-not-merge-wip-for-gith/nimelepbpejjlbmoobocpfnjhihnpked",',
    '    "version": "1.0.6"',
    '  }'
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
