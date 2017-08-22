import * as _             from 'lodash';
import {NgModule}         from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientPlus}   from './_constructor/constructor';
import init               from './initializer/initializer';
import httpWrappers       from './http-wrappers/http-wrappers';

_.extend(HttpClientPlus.prototype, {
  init,
  ...httpWrappers
});

@NgModule({
  imports: [HttpClientModule],
  providers: [HttpClientPlus]
}) class HttpClientPlusModule {}

export {
  HttpClientPlus,
  HttpClientPlusModule
};
