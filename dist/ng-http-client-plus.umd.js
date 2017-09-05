(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("@angular/common/http"), require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "@angular/common/http", "@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["ngHttpClientPlus"] = factory(require("lodash"), require("@angular/common/http"), require("@angular/core"));
	else
		root["ngHttpClientPlus"] = factory(root["_"], root["ng"]["common"]["http"], root["ng"]["core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientPlus; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClientPlus = (function () {
    function HttpClientPlus(http) {
        this.http = http;
    }
    HttpClientPlus = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"]])
    ], HttpClientPlus);
    return HttpClientPlus;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_http_client_method_names__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_preprocessor_request_preprocessor__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](__WEBPACK_IMPORTED_MODULE_1__lib_http_client_method_names__["a" /* default */], function (proto, methodNames, methodType) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](methodNames, function (proto, methodName) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](proto, (_a = {},
            _a[methodName] = function (url, body, options) {
                var args = __WEBPACK_IMPORTED_MODULE_2__request_preprocessor_request_preprocessor__["a" /* default */].call(this, url, body, options, methodType);
                return (_a = this.http)[methodName].apply(_a, args);
                var _a;
            },
            _a));
        var _a;
    }, proto);
}, {});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/* harmony default export */ __webpack_exports__["a"] = function (configs) {
    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](this, { configs: configs });
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function () {
    return sessionStorage.getItem(this.configs.tokenName);
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function () {
    sessionStorage.removeItem(this.configs.tokenName);
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (token) {
    sessionStorage.setItem(this.configs.tokenName, token);
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    query: ['get', 'delete'],
    body: ['post', 'put', 'patch']
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__);


/* harmony default export */ __webpack_exports__["a"] = function (url, body, options, queryMethod) {
    var token = this.getToken();
    if (!url.startsWith('http')) {
        url = (this.configs.baseUrl || '') + url;
    }
    if (queryMethod) {
        if (body) {
            var params = body.params;
            if (params && !(params instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"])) {
                params = __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](params, function (params, value, name) {
                    return params.append(name, value);
                }, new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"]());
                __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](body, { params: params });
            }
        }
        options = body;
    }
    if (token) {
        if (!options) {
            options = { headers: null };
        }
        var headers = options.headers;
        if (!(headers instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"])) {
            headers = __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](headers, function (headers, value, name) {
                return headers.append(name, value);
            }, new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]());
        }
        options.headers = headers.append('Authorization', "Bearer " + token);
        if (queryMethod) {
            body = options;
        }
    }
    return [url, body, options];
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constructor_constructor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initializer_initializer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_setter_token_setter__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token_remover_token_remover__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__token_getter_token_getter__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_wrappers_http_wrappers__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientPlus", function() { return __WEBPACK_IMPORTED_MODULE_3__constructor_constructor__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientPlusModule", function() { return HttpClientPlusModule; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









__WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](__WEBPACK_IMPORTED_MODULE_3__constructor_constructor__["a" /* HttpClientPlus */].prototype, __assign({ init: __WEBPACK_IMPORTED_MODULE_4__initializer_initializer__["a" /* default */],
    getToken: __WEBPACK_IMPORTED_MODULE_7__token_getter_token_getter__["a" /* default */],
    setToken: __WEBPACK_IMPORTED_MODULE_5__token_setter_token_setter__["a" /* default */],
    removeToken: __WEBPACK_IMPORTED_MODULE_6__token_remover_token_remover__["a" /* default */] }, __WEBPACK_IMPORTED_MODULE_8__http_wrappers_http_wrappers__["a" /* default */]));
var HttpClientPlusModule = (function () {
    function HttpClientPlusModule() {
    }
    HttpClientPlusModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClientModule"]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__constructor_constructor__["a" /* HttpClientPlus */]]
        })
    ], HttpClientPlusModule);
    return HttpClientPlusModule;
}());



/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMzcxMzkyZjZlZTYzYTY2OWY5OCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvbW1vblwiLFwiaHR0cFwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJjb3JlXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2NvcmVcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvY29yZVwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb3JlXCJ9Iiwid2VicGFjazovLy8uL3NyYy9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0dHAtd3JhcHBlcnMvaHR0cC13cmFwcGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZXIvaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLWdldHRlci90b2tlbi1nZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLXJlbW92ZXIvdG9rZW4tcmVtb3Zlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4tc2V0dGVyL3Rva2VuLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC13cmFwcGVycy9fbGliL2h0dHAtY2xpZW50LW1ldGhvZC1uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC13cmFwcGVycy9yZXF1ZXN0LXByZXByb2Nlc3Nvci9yZXF1ZXN0LXByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctaHR0cC1jbGllbnQtcGx1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ1A7QUFHekM7SUFXRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFYN0IsY0FBYztRQUQxQixnRkFBVSxFQUFFO3lDQVllLGdFQUFVO09BWHpCLGNBQWMsQ0FZMUI7SUFBRCxxQkFBQztDQUFBO0FBWjBCOzs7Ozs7Ozs7Ozs7QUNKZ0I7QUFDeUI7QUFDWTtBQUVoRix3REFBZSw4Q0FBUSxDQUFDLDhFQUFxQixFQUFFLFVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVO0lBQzVFLE1BQU0sQ0FBQyw4Q0FBUSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUssRUFBRSxVQUFVO1FBQzdD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LFVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJO2dCQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQyxFQUFFLElBQUksaUVBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVUsS0FBTyxDQUFDLENBQUM7UUFFckUsRUFBRSxFQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUN1QztBQUNPO0FBQ087QUFDTTtBQUNEO0FBQ0U7QUFDRTtBQUNGO0FBQ0U7QUFFL0QsOENBQVEsQ0FBQyxnRkFBYyxDQUFDLFNBQVMsYUFDL0IsSUFBSTtJQUNKLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVyxtRkFDUiw2RUFBWSxFQUNmLENBQUM7QUFLQTtJQUFBO0lBQTRCLENBQUM7SUFBdkIsb0JBQW9CO1FBSDVCLDhFQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxzRUFBZ0IsQ0FBQztZQUMzQixTQUFTLEVBQUUsQ0FBQyxnRkFBYyxDQUFDO1NBQzVCLENBQUM7T0FBTyxvQkFBb0IsQ0FBRztJQUFELDJCQUFDO0NBQUE7QUFLOUIiLCJmaWxlIjoibmctaHR0cC1jbGllbnQtcGx1cy51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCIsIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIiwgXCJAYW5ndWxhci9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nSHR0cENsaWVudFBsdXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nSHR0cENsaWVudFBsdXNcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdLCByb290W1wibmdcIl1bXCJjb21tb25cIl1bXCJodHRwXCJdLCByb290W1wibmdcIl1bXCJjb3JlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMzcxMzkyZjZlZTYzYTY2OWY5OCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJjb21tb25cIixcImh0dHBcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvcmVcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29yZVwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2NvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudFBsdXMge1xuICBpbml0O1xuICBnZXQ7XG4gIHBvc3Q7XG4gIGRlbGV0ZTtcbiAgcHV0O1xuICBwYXRjaDtcbiAgZ2V0VG9rZW47XG4gIHNldFRva2VuO1xuICByZW1vdmVUb2tlbjtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgaHR0cENsaWVudE1ldGhvZE5hbWVzIGZyb20gJy4vX2xpYi9odHRwLWNsaWVudC1tZXRob2QtbmFtZXMnO1xuaW1wb3J0IHJlcXVlc3RQcmVwcm9jZXNzb3IgICBmcm9tICcuL3JlcXVlc3QtcHJlcHJvY2Vzc29yL3JlcXVlc3QtcHJlcHJvY2Vzc29yJzsgXG5cbmV4cG9ydCBkZWZhdWx0IF8ucmVkdWNlKGh0dHBDbGllbnRNZXRob2ROYW1lcywgKHByb3RvLCBtZXRob2ROYW1lcywgbWV0aG9kVHlwZSkgPT4ge1xuICByZXR1cm4gXy5yZWR1Y2UobWV0aG9kTmFtZXMsIChwcm90bywgbWV0aG9kTmFtZSkgPT4ge1xuICAgIHJldHVybiBfLmV4dGVuZChwcm90bywge1xuICAgICAgW21ldGhvZE5hbWVdOiBmdW5jdGlvbih1cmwsIGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSByZXF1ZXN0UHJlcHJvY2Vzc29yLmNhbGwodGhpcywgdXJsLCBib2R5LCBvcHRpb25zLCBtZXRob2RUeXBlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2ROYW1lXSguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgcHJvdG8pO1xufSwge30pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h0dHAtd3JhcHBlcnMvaHR0cC13cmFwcGVycy50cyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uZmlncykge1xuICBfLmV4dGVuZCh0aGlzLCB7Y29uZmlnc30pOyAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZXIvaW5pdGlhbGl6ZXIudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5jb25maWdzLnRva2VuTmFtZSk7ICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b2tlbi1nZXR0ZXIvdG9rZW4tZ2V0dGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5jb25maWdzLnRva2VuTmFtZSk7ICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b2tlbi1yZW1vdmVyL3Rva2VuLXJlbW92ZXIudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0b2tlbikge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMuY29uZmlncy50b2tlbk5hbWUsIHRva2VuKTsgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rva2VuLXNldHRlci90b2tlbi1zZXR0ZXIudHMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5OiBbJ2dldCcsICdkZWxldGUnXSxcbiAgYm9keTogWydwb3N0JywgJ3B1dCcsICdwYXRjaCddXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h0dHAtd3JhcHBlcnMvX2xpYi9odHRwLWNsaWVudC1tZXRob2QtbmFtZXMudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtIdHRwUGFyYW1zLCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih1cmwsIGJvZHksIG9wdGlvbnMsIHF1ZXJ5TWV0aG9kKSB7XG4gIGxldCB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcblxuICBpZighdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgIHVybCA9ICh0aGlzLmNvbmZpZ3MuYmFzZVVybCB8fCAnJykgKyB1cmw7XG4gIH1cbiAgXG4gIGlmKHF1ZXJ5TWV0aG9kKSB7XG4gICAgaWYoYm9keSkge1xuICAgICAgbGV0IHtwYXJhbXN9ID0gYm9keTtcbiAgICAgIGlmKHBhcmFtcyAmJiAhKHBhcmFtcyBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpKSB7XG4gICAgICAgIHBhcmFtcyA9IF8ucmVkdWNlKHBhcmFtcywgKHBhcmFtcywgdmFsdWUsIG5hbWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1zLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0sIG5ldyBIdHRwUGFyYW1zKCkpO1xuICAgICAgICBcbiAgICAgICAgXy5leHRlbmQoYm9keSwge3BhcmFtc30pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBib2R5O1xuICB9XG4gIFxuICBpZih0b2tlbikge1xuICAgIGlmKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge2hlYWRlcnM6IG51bGx9O1xuICAgIH1cbiAgICBcbiAgICBsZXQge2hlYWRlcnN9ID0gb3B0aW9ucztcbiAgICBcbiAgICBpZighKGhlYWRlcnMgaW5zdGFuY2VvZiBIdHRwSGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMgPSBfLnJlZHVjZShoZWFkZXJzLCAoaGVhZGVycywgdmFsdWUsIG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcnMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sIG5ldyBIdHRwSGVhZGVycygpKVxuICAgIH1cbiAgICBcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHt0b2tlbn1gKTtcbiAgICBcbiAgICBpZihxdWVyeU1ldGhvZCkge1xuICAgICAgYm9keSA9IG9wdGlvbnM7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gW3VybCwgYm9keSwgb3B0aW9uc107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHR0cC13cmFwcGVycy9yZXF1ZXN0LXByZXByb2Nlc3Nvci9yZXF1ZXN0LXByZXByb2Nlc3Nvci50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7TmdNb2R1bGV9ICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SHR0cENsaWVudFBsdXN9ICAgZnJvbSAnLi9fY29uc3RydWN0b3IvY29uc3RydWN0b3InO1xuaW1wb3J0IGluaXQgICAgICAgICAgICAgICBmcm9tICcuL2luaXRpYWxpemVyL2luaXRpYWxpemVyJztcbmltcG9ydCBzZXRUb2tlbiAgICAgICAgICAgZnJvbSAnLi90b2tlbi1zZXR0ZXIvdG9rZW4tc2V0dGVyJztcbmltcG9ydCByZW1vdmVUb2tlbiAgICAgICAgZnJvbSAnLi90b2tlbi1yZW1vdmVyL3Rva2VuLXJlbW92ZXInO1xuaW1wb3J0IGdldFRva2VuICAgICAgICAgICBmcm9tICcuL3Rva2VuLWdldHRlci90b2tlbi1nZXR0ZXInO1xuaW1wb3J0IGh0dHBXcmFwcGVycyAgICAgICBmcm9tICcuL2h0dHAtd3JhcHBlcnMvaHR0cC13cmFwcGVycyc7XG5cbl8uZXh0ZW5kKEh0dHBDbGllbnRQbHVzLnByb3RvdHlwZSwge1xuICBpbml0LFxuICBnZXRUb2tlbixcbiAgc2V0VG9rZW4sXG4gIHJlbW92ZVRva2VuLFxuICAuLi5odHRwV3JhcHBlcnNcbn0pO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0h0dHBDbGllbnRQbHVzXVxufSkgY2xhc3MgSHR0cENsaWVudFBsdXNNb2R1bGUge31cblxuZXhwb3J0IHtcbiAgSHR0cENsaWVudFBsdXMsXG4gIEh0dHBDbGllbnRQbHVzTW9kdWxlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25nLWh0dHAtY2xpZW50LXBsdXMudHMiXSwic291cmNlUm9vdCI6IiJ9