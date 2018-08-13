# mapbox-omt-lang [![CircleCI](https://circleci.com/gh/tusbar/mapbox-omt-lang.svg?style=svg)](https://circleci.com/gh/tusbar/mapbox-omt-lang)

> Update the language of your OpenMapTiles vector tiles for Mapbox GL JS.

[![npm version](https://badgen.net/npm/v/mapbox-omt-lang)](https://www.npmjs.com/package/mapbox-omt-lang)
[![dependencies Status](https://badgen.net/david/dep/tusbar/mapbox-omt-lang)](https://david-dm.org/tusbar/mapbox-omt-lang)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

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

## See also

* [mapbox-gl-language](https://github.com/mapbox/mapbox-gl-language): Switch language of your Mapbox GL JS style
* [openmaptiles-language](https://github.com/klokantech/openmaptiles-language): Javascript library for changing language of OpenMapTiles map in mapbox-gl-js

## Why another library

* [mapbox-gl-language](https://github.com/mapbox/mapbox-gl-language) doesn’t work with openmaptiles styles.
* [openmaptiles-language](https://github.com/klokantech/openmaptiles-language) modifies mapboxgl.Map’s prototype and isn’t published as an NPM package.

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
