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
    '  $ chrome-web-store-item-property-cli nimelepbpejjlbmoobocpfnjhihnpked | jq .',
    '  {',
    '    "name": "Do Not Merge WIP for GitHub",',
    '    "url": "https://chrome.google.com/webstore/detail/do-not-merge-wip-for-gith/nimelepbpejjlbmoobocpfnjhihnpked",',
    '    "image": "https://ssl.gstatic.com/chrome/webstore/images/thumb.png",',
    '    "version": "1.0.6",',
    '    "price": "$0",',
    '    "priceCurrency": "USD",',
    '    "interactionCount": {',
    '      "UserDownloads": 421',
    '    },',
    '    "operatingSystems": "Chrome",',
    '    "ratingValue": 4.5,',
    '    "ratingCount": 2,',
    '    "id": "nimelepbpejjlbmoobocpfnjhihnpked"',
    '  }'
  ]
});

if (cli.input.length < 1) {
  console.error('Identifier for Chrome Web Store is required');
  process.exit(1);
}

chromeWebStoreItemProperty(cli.input[0])
  .then(function (value) {
    console.log(JSON.stringify(value));
  }).catch(function (err) {
    console.error(err.message);
    process.exit(1);
  });
