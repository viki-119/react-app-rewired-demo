// 参考文档: https://www.npmjs.com/package/customize-cra;
const {
  override, addDecoratorsLegacy, addWebpackAlias, addLessLoader, babelInclude,
} = require('customize-cra');
const AliasJsconfig = require('alias-jsconfig-webpack-plugin');
const path = require('path');

const aliasJsconfigPlugin = new AliasJsconfig();
const myPlugins = [aliasJsconfigPlugin];

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader(),
  babelInclude([
    path.resolve('./'),
  ]),
  (config) => {
    config.plugins = [...config.plugins, ...myPlugins];
    config.entry = path.resolve(__dirname, 'test/index.js');
    return config;
  },
);
