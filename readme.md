# chrome-web-store-item-property-cli

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Gather meta information from chrome web store

See [chrome-web-store-item-property](https://github.com/pandawing/node-chrome-web-store-item-property) for the programmatic API and issue tracker.

## Install

```
$ npm install --global chrome-web-store-item-property-cli
```


## CLI

```
$ chrome-web-store-item-property-cli --help

  Usage
    $ chrome-web-store-item-property-cli [identifier]

  Examples
    $ chrome-web-store-item-property-cli nimelepbpejjlbmoobocpfnjhihnpked | python -mjson.tool
    {
      "id": "nimelepbpejjlbmoobocpfnjhihnpked",
      "image": "https://ssl.gstatic.com/chrome/webstore/images/thumb.png",
      "interactionCount": {
        "UserDownloads": "421"
      },
      "name": "Do Not Merge WIP for GitHub",
      "operatingSystems": "Chrome",
      "price": "$0",
      "priceCurrency": "USD",
      "ratingCount": "2",
      "ratingValue": "4.5",
      "url": "https://chrome.google.com/webstore/detail/do-not-merge-wip-for-gith/nimelepbpejjlbmoobocpfnjhihnpked",
      "version": "1.0.6"
    }
```


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/pandawing/node-chrome-web-store-item-property-cli
[travis-image]: https://img.shields.io/travis/pandawing/node-chrome-web-store-item-property-cli/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-chrome-web-store-item-property-cli/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-chrome-web-store-item-property-cli/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/chrome-web-store-item-property-cli
[npm-image]: https://img.shields.io/npm/v/chrome-web-store-item-property-cli.svg?style=flat-square
[daviddm-url]: https://david-dm.org/pandawing/node-chrome-web-store-item-property-cli
[daviddm-image]: https://img.shields.io/david/pandawing/node-chrome-web-store-item-property-cli.svg?style=flat-square
