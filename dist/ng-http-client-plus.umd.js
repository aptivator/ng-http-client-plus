(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash'), require('@angular/core'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash', '@angular/core', '@angular/common/http'], factory) :
	(factory((global.ngHttpClientPlus = {}),global._,global.ng.core,global.ng.common.http));
}(this, (function (exports,_,core,http) { 'use strict';

var HttpClientPlus = /** @class */ (function () {
    function HttpClientPlus(http$$1) {
        this.http = http$$1;
    }
    HttpClientPlus.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    HttpClientPlus.ctorParameters = function () { return [
        { type: http.HttpClient, },
    ]; };
    return HttpClientPlus;
}());

var init = function (configs) {
    _.extend(this, { configs: configs });
};

var setToken = function (token) {
    sessionStorage.setItem(this.configs.tokenName, token);
};

var removeToken = function () {
    sessionStorage.removeItem(this.configs.tokenName);
};

var getToken = function () {
    return sessionStorage.getItem(this.configs.tokenName);
};

var httpClientMethodNames = {
    query: ['get', 'delete'],
    body: ['post', 'put', 'patch']
};

var requestPreprocessor = function (url, body, options, queryMethod) {
    var token = this.getToken();
    if (!url.startsWith('http')) {
        url = (this.configs.baseUrl || '') + url;
    }
    if (queryMethod) {
        if (body) {
            var params = body.params;
            if (params && !(params instanceof http.HttpParams)) {
                params = _.reduce(params, function (params, value, name) {
                    return params.append(name, value);
                }, new http.HttpParams());
                _.extend(body, { params: params });
            }
        }
        options = body;
    }
    if (token) {
        if (!options) {
            options = { headers: null };
        }
        var headers = options.headers;
        if (!(headers instanceof http.HttpHeaders)) {
            headers = _.reduce(headers, function (headers, value, name) {
                return headers.append(name, value);
            }, new http.HttpHeaders());
        }
        options.headers = headers.append('Authorization', "Bearer " + token);
        if (queryMethod) {
            body = options;
        }
    }
    return [url, body, options];
};

var httpWrappers = _.reduce(httpClientMethodNames, function (proto, methodNames, methodType) {
    var queryMethod = methodType === 'query';
    return _.reduce(methodNames, function (proto, methodName) {
        return _.extend(proto, (_a = {},
            _a[methodName] = function (url, body, options) {
                var args = requestPreprocessor.call(this, url, body, options, queryMethod);
                return (_a = this.http)[methodName].apply(_a, args);
                var _a;
            },
            _a));
        var _a;
    }, proto);
}, {});

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
_.extend(HttpClientPlus.prototype, __assign({ init: init,
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken }, httpWrappers));
var HttpClientPlusModule = /** @class */ (function () {
    function HttpClientPlusModule() {
    }
    HttpClientPlusModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [http.HttpClientModule],
                    providers: [HttpClientPlus]
                },] },
    ];
    /** @nocollapse */
    HttpClientPlusModule.ctorParameters = function () { return []; };
    return HttpClientPlusModule;
}());

exports.HttpClientPlus = HttpClientPlus;
exports.HttpClientPlusModule = HttpClientPlusModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
