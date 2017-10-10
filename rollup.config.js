export default {
  input: 'dist/ng-http-client-plus.js',
  name: 'ngHttpClientPlus',
  output: {
    file: 'dist/ng-http-client-plus.umd.js',
    format: 'umd'
  },
  sourceMap: false,
  globals: {
    'lodash': '_',
    '@angular/core': 'ng.core',
    '@angular/common/http': 'ng.common.http'
  },
  external: [
    'lodash',
    '@angular/core',
    '@angular/common/http'
  ]
};
