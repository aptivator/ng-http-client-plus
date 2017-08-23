import * as _             from 'lodash';
import {NgModule}         from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientPlus}   from './_constructor/constructor';
import init               from './initializer/initializer';
import setToken           from './token-setter/token-setter';
import removeToken        from './token-remover/token-remover';
import getToken           from './token-getter/token-getter';
import httpWrappers       from './http-wrappers/http-wrappers';

_.extend(HttpClientPlus.prototype, {
  init,
  getToken,
  setToken,
  removeToken,
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
