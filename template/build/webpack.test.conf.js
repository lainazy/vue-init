// This is the webpack config used for unit tests.

const webpack = require('webpack');
const merge = require('webpack-merge');
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader',
    },
  },
  module: {
    rules: utils.styleLoaders(),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.test.env,
    }),
  ],
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
