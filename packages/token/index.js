const postcss = require('postcss');
const postcssFunctions = require('postcss-functions');
const { name } = require('./package.json')

const { createThemesFor, ThemeVariant } = require('@atb-as/theme')

const { light: theme } = createThemesFor(ThemeVariant.AtB)

const camelToKebab = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const token = (value) => {

  let token

  const parse = () => {
    const syntax = /^(['"])((?:[a-z0-9][a-zA-Z0-9]*)(?:\.[a-z0-9][a-zA-Z0-9]*)*)(\1)$/

    const [,, _token] = value.match(syntax);

    if (!_token) {
      throw new Error(`Invalid syntax in value ${value}`)
    }

    token = _token
  }

  const exists = () => {
    const leaf = token.split('.').reduce((o, p) => o[p] || null, theme) || null
    if (typeof leaf === 'object' || leaf === null) {
      throw new Error(`Token '${token}' is not defined.`)
    }
  }

  const makeToken = () => `var(--${camelToKebab(token).replace(/\./g, '-')})`

  parse()
  exists()

  return makeToken()
}

/**
 * @type {import('postcss').PluginCreator}
 */
const plugin = (() => {
  const functionsPlugin = postcssFunctions({
    functions: {
      token
    },
  });

  return {
    postcssPlugin: name,

    async Once(root) {
      await postcss([functionsPlugin]).process(root, { from: undefined });
    }
  }
})

plugin.postcss = true

module.exports = plugin
