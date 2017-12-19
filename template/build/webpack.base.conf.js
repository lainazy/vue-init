const path = require('path');
const webpack = require('webpack');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

function transformEnv(env) {
  return env === 'production' ? 'prod' : env === 'testing' ? 'test' : 'dev';
}

module.exports = {
  entry: {
    app: config.base.useFlexible ? ['@/libs/ydui.flexible.js', '@/main.js'] : '@/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    // hashDigestLength: 7,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        include: [resolve('src'), resolve('test')],
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          formatter: eslintFriendlyFormatter,
        },
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test')],
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    // https://doc.webpack-china.org/plugins/provide-plugin
    new webpack.ProvidePlugin({
      $config: [resolve('src/data/env.conf'), transformEnv(process.env.NODE_ENV)],
      $axios: [resolve('src/api/axios'), 'default'],
      $api: [resolve('src/api/path'), 'default'],
    }),
  ],
};
