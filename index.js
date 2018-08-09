/**
 * @param {string} field Mapbox GL field name.
 * @returns {boolean} Returns whether the field is translatable.
 */
const isLangField = field => {
  return /^\{name[}:_]/.test(field)
}

class MapboxOmtLang {
  /**
   * @param {string} lang Initial language code.
   * @public
   */
  constructor(lang) {
    if (!lang) {
      throw new TypeError('The lang option is mandatory')
    }

    this.lang = lang
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
   * @public
   */
  setLanguage(lang) {
    if (!lang) {
      throw new TypeError('The lang option is mandatory')
    }

    this.lang = lang

    this._updateLayers()
  }

  /**
   * @private
   */
  _onStyleData({style}) {
    this.localizedLayers = style.stylesheet.layers.filter(layer =>
      layer.layout && isLangField(layer.layout['text-field'])
    )

    this._updateLayers()
  }

  /**
   * @private
   */
  _updateLayers() {
    const style = [
      'coalesce',
      ['get', `name:${this.lang}`]
    ]

    if (this.lang === 'en' || this.lang === 'de') {
      style.push(['get', `name_${this.lang}`])
    }

    style.push(['get', 'name'])

    for (const layer of this.localizedLayers) {
      this._map.setLayoutProperty(layer.id, 'text-field', style)
    }
  }
}

export default MapboxOmtLang
