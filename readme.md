# chrome-web-store-item-property-cli

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> My spectacular module


## Install

```
$ npm install --save chrome-web-store-item-property-cli
```


## Usage

```js
var chromeWebStoreItemPropertyCli = require('chrome-web-store-item-property-cli');

chromeWebStoreItemPropertyCli('unicorns');
//=> unicorns & rainbows
```



## CLI

```
$ npm install --global chrome-web-store-item-property-cli
```
```
$ chrome-web-store-item-property-cli --help

  Usage
    chrome-web-store-item-property-cli [input]

  Example
    chrome-web-store-item-property-cli
    unicorns & rainbows

    chrome-web-store-item-property-cli ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```



## API

### chromeWebStoreItemPropertyCli(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/sanemat/chrome-web-store-item-property-cli
[travis-image]: https://img.shields.io/travis/sanemat/chrome-web-store-item-property-cli/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/chrome-web-store-item-property-cli/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/chrome-web-store-item-property-cli/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/chrome-web-store-item-property-cli
[npm-image]: https://img.shields.io/npm/v/chrome-web-store-item-property-cli.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/chrome-web-store-item-property-cli
[daviddm-image]: https://img.shields.io/david/sanemat/chrome-web-store-item-property-cli.svg?style=flat-square
