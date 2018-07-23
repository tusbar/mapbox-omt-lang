const NON_LATIN = [
  'ar',
  'be',
  'bg',
  'el',
  'he',
  'hy',
  'ja',
  'ja_kana',
  'ka',
  'kk',
  'kn',
  'ko',
  'mk',
  'ru',
  'sr',
  'th',
  'uk',
  'zh'
]

const isLangField = field => {
  return /^\{name[}:_]/.test(field)
}

class MapLang {
  /**
   * @param {string} lang Initial language code.
   * @param {boolean} [alt=true] Enable alternative labels.
   * @public
   */
  constructor(lang, alt = true) {
    this._updateLang(lang, alt)
  }

  onAdd(map) {
    this._map = map
    this._container = document.createElement('div')
    this._map.once('styledata', this._onStyleData.bind(this))

    return this._container
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container)
    delete this._map
  }

  /**
   * @param {string} lang Language code to switch to.
   * @param {boolean} [alt=true] Enable alternative labels.
   * @public
   */
  setLanguage(lang, alt = true) {
    this._updateLang(lang, alt)

    this._map.setStyle(
      this._updateStyle(
        this._map.getStyle()
      )
    )
  }

  /**
   * @private
   */
  _onStyleData({style}) {
    this._map.setStyle(
      this._updateStyle(style.stylesheet)
    )
  }

  /**
   * @param {string} lang Language code to switch to.
   * @param {boolean} alt Enable alternative labels.
   * @private
   */
  _updateLang(lang, alt) {
    if (!lang) {
      throw new TypeError('The lang option is mandatory')
    }

    this.lang = lang
    this.alt = alt
    this.separator = lang === 'en' || lang === 'de' ? '_' : ':'
    this.isLatin = !NON_LATIN.includes(lang)
  }

  /**
   * @param {object} style Mapbox GL style.
   * @returns {object} Updated Mapbox GL style.
   * @private
   */
  _updateStyle(style) {
    const layers = style.layers.map(layer => {
      if (!layer.layout || !layer.layout['text-field']) {
        return layer
      }

      let textField = layer.layout['text-field']
      if (!isLangField(textField)) {
        return layer
      }

      textField = `{name${this.separator}${this.lang}}`

      if (this.alt) {
        const alt = this.isLatin ? '{name:nonlatin}' : '{name:latin}'

        if (layer.layout['symbol-placement'] === 'line') {
          textField += ` ${alt}`
        } else {
          textField += `\n${alt}`
        }
      }

      layer = {
        ...layer,
        layout: {
          ...layer.layout,
          'text-field': textField
        }
      }

      return layer
    })

    return {
      ...style,
      layers
    }
  }
}

export default MapLang
