const withTM = require('next-transpile-modules')(['@atb-as/theme']);

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

module.exports = withTM({
  reactStrictMode: true,

  webpack: (config) => {
    const oneOf = config.module.rules.find(
      (rule) => typeof rule.oneOf === 'object',
    );
    if (oneOf) {
      const moduleCssRule = oneOf.oneOf.find(
        (rule) => regexEqual(rule.test, /\.module\.css$/),
        // regexEqual(rule.test, /\.module\.(scss|sass)$/)
      );
      if (moduleCssRule) {
        const cssLoader = moduleCssRule.use.find(({loader}) =>
          loader.includes('css-loader'),
        );
        if (cssLoader) {
          cssLoader.options.modules.mode = 'local';
        }
      }
    }
    return config;
  },
});
