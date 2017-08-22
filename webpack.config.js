let webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  entry: './src/ng-http-plus.ts',

  output: {
    path: './dist',
    publicPath: '/',
    filename: 'ng-http-plus.umd.js',
    library: 'ngHttpPlus',
    libraryTarget: 'umd'
  },

  externals: {
    'lodash': {
      root: '_', 
      commonjs: 'lodash', 
      commonjs2: 'lodash', 
      amd: 'lodash'
    },
    '@angular/core': {
      root: ['ng', 'core'], 
      commonjs: '@angular/core', 
      commonjs2: '@angular/core', 
      amd: '@angular/core'
    },
    '@angular/common/http': {
      root: ['ng', 'common', 'http'],
      commonjs: '@angular/common/http',
      commonjs2: '@angular/common/http',
      amd: '@angular/common/http'
    }
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }]
  },

  plugins: [
    // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
    new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, './src')
  ]
};
