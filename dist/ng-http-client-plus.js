var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as _ from 'lodash';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientPlus } from './_constructor/constructor';
import init from './initializer/initializer';
import setToken from './token-setter/token-setter';
import removeToken from './token-remover/token-remover';
import getToken from './token-getter/token-getter';
import httpWrappers from './http-wrappers/http-wrappers';
_.extend(HttpClientPlus.prototype, __assign({ init: init,
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken }, httpWrappers));
var HttpClientPlusModule = /** @class */ (function () {
    function HttpClientPlusModule() {
    }
    HttpClientPlusModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
                    providers: [HttpClientPlus]
                },] },
    ];
    /** @nocollapse */
    HttpClientPlusModule.ctorParameters = function () { return []; };
    return HttpClientPlusModule;
}());
export { HttpClientPlus, HttpClientPlusModule };
//# sourceMappingURL=ng-http-client-plus.js.map