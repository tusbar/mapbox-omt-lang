# mapbox-omt-lang [![CircleCI](https://circleci.com/gh/tusbar/mapbox-omt-lang.svg?style=svg)](https://circleci.com/gh/tusbar/mapbox-omt-lang)

[![npm version](https://img.shields.io/npm/v/mapbox-omt-lang.svg)](https://www.npmjs.com/package/mapbox-omt-lang)
[![dependencies Status](https://david-dm.org/tusbar/mapbox-omt-lang/status.svg)](https://david-dm.org/tusbar/mapbox-omt-lang)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Update the language of your OpenMapTiles vector tiles for Mapbox GL JS.

## Getting started

```bash
$ npm install mapbox-omt-lang
```

## Usage

This library exposes a `MapboxOmtLang` class that is used as a Mapbox GL JS map control.

```js
const map = new mapboxgl.Map({/* options */})
const mapLang = new MapboxOmtLang('fr')

map.addControl(mapLang)
```

## License

MIT


## Miscellaneous

```
    ╚⊙ ⊙╝
  ╚═(███)═╝
 ╚═(███)═╝
╚═(███)═╝
 ╚═(███)═╝
  ╚═(███)═╝
   ╚═(███)═╝
```
