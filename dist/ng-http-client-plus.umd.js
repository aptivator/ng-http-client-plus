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
    var queryMethod = methodType === 'query';
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](methodNames, function (proto, methodName) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](proto, (_a = {},
            _a[methodName] = function (url, body, options) {
                var args = __WEBPACK_IMPORTED_MODULE_2__request_preprocessor_request_preprocessor__["a" /* default */].call(this, url, body, options, queryMethod);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NDY4YTkwYjYwOTNiZjFjY2ZmZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvbW1vblwiLFwiaHR0cFwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJjb3JlXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2NvcmVcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvY29yZVwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb3JlXCJ9Iiwid2VicGFjazovLy8uL3NyYy9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0dHAtd3JhcHBlcnMvaHR0cC13cmFwcGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZXIvaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLWdldHRlci90b2tlbi1nZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLXJlbW92ZXIvdG9rZW4tcmVtb3Zlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4tc2V0dGVyL3Rva2VuLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC13cmFwcGVycy9fbGliL2h0dHAtY2xpZW50LW1ldGhvZC1uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC13cmFwcGVycy9yZXF1ZXN0LXByZXByb2Nlc3Nvci9yZXF1ZXN0LXByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmctaHR0cC1jbGllbnQtcGx1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ1A7QUFHekM7SUFDRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFEN0IsY0FBYztRQUQxQixnRkFBVSxFQUFFO3lDQUVlLGdFQUFVO09BRHpCLGNBQWMsQ0FFMUI7SUFBRCxxQkFBQztDQUFBO0FBRjBCOzs7Ozs7Ozs7Ozs7QUNKZ0I7QUFDeUI7QUFDWTtBQUVoRix3REFBZSw4Q0FBUSxDQUFDLDhFQUFxQixFQUFFLFVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVO0lBQzVFLElBQUksV0FBVyxHQUFHLFVBQVUsS0FBSyxPQUFPLENBQUM7SUFFekMsTUFBTSxDQUFDLDhDQUFR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Q0FBQztZQUNyQyxPQUFPLEdBQUcsOENBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUk7Z0JBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyQyxDQUFDLEVBQUUsSUFBSSxpRUFBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQztRQUVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsWUFBVSxLQUFPLENBQUMsQ0FBQztRQUVyRSxFQUFFLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksR0FBRyxPQUFPLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q3VDO0FBQ087QUFDTztBQUNNO0FBQ0Q7QUFDRTtBQUNFO0FBQ0Y7QUFDRTtBQUUvRCw4Q0FBUSxDQUFDLGdGQUFjLENBQUMsU0FBUyxhQUMvQixJQUFJO0lBQ0osUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXLG1GQUNSLDZFQUFZLEVBQ2YsQ0FBQztBQUtBO0lBQUE7SUFBNEIsQ0FBQztJQUF2QixvQkFBb0I7UUFINUIsOEVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHNFQUFnQixDQUFDO1lBQzNCLFNBQVMsRUFBRSxDQUFDLGdGQUFjLENBQUM7U0FDNUIsQ0FBQztPQUFPLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQTtBQUs5QiIsImZpbGUiOiJuZy1odHRwLWNsaWVudC1wbHVzLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIiwgXCJAYW5ndWxhci9jb21tb24vaHR0cFwiLCBcIkBhbmd1bGFyL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmdIdHRwQ2xpZW50UGx1c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmdIdHRwQ2xpZW50UGx1c1wiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0sIHJvb3RbXCJuZ1wiXVtcImNvbW1vblwiXVtcImh0dHBcIl0sIHJvb3RbXCJuZ1wiXVtcImNvcmVcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU0NjhhOTBiNjA5M2JmMWNjZmZmIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvbW1vblwiLFwiaHR0cFwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpbXCJuZ1wiLFwiY29yZVwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJjb21tb25qczJcIjpcIkBhbmd1bGFyL2NvcmVcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29yZVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50UGx1cyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgaHR0cENsaWVudE1ldGhvZE5hbWVzIGZyb20gJy4vX2xpYi9odHRwLWNsaWVudC1tZXRob2QtbmFtZXMnO1xuaW1wb3J0IHJlcXVlc3RQcmVwcm9jZXNzb3IgICBmcm9tICcuL3JlcXVlc3QtcHJlcHJvY2Vzc29yL3JlcXVlc3QtcHJlcHJvY2Vzc29yJzsgXG5cbmV4cG9ydCBkZWZhdWx0IF8ucmVkdWNlKGh0dHBDbGllbnRNZXRob2ROYW1lcywgKHByb3RvLCBtZXRob2ROYW1lcywgbWV0aG9kVHlwZSkgPT4ge1xuICBsZXQgcXVlcnlNZXRob2QgPSBtZXRob2RUeXBlID09PSAncXVlcnknO1xuICBcbiAgcmV0dXJuIF8ucmVkdWNlKG1ldGhvZE5hbWVzLCAocHJvdG8sIG1ldGhvZE5hbWUpID0+IHtcbiAgICByZXR1cm4gXy5leHRlbmQocHJvdG8sIHtcbiAgICAgIFttZXRob2ROYW1lXTogZnVuY3Rpb24odXJsLCBib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBhcmdzID0gcmVxdWVzdFByZXByb2Nlc3Nvci5jYWxsKHRoaXMsIHVybCwgYm9keSwgb3B0aW9ucywgcXVlcnlNZXRob2QpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZE5hbWVdKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBwcm90byk7XG59LCB7fSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHR0cC13cmFwcGVycy9odHRwLXdyYXBwZXJzLnRzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb25maWdzKSB7XG4gIF8uZXh0ZW5kKHRoaXMsIHtjb25maWdzfSk7ICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplci9pbml0aWFsaXplci50cyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmNvbmZpZ3MudG9rZW5OYW1lKTsgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rva2VuLWdldHRlci90b2tlbi1nZXR0ZXIudHMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmNvbmZpZ3MudG9rZW5OYW1lKTsgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rva2VuLXJlbW92ZXIvdG9rZW4tcmVtb3Zlci50cyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5jb25maWdzLnRva2VuTmFtZSwgdG9rZW4pOyAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9rZW4tc2V0dGVyL3Rva2VuLXNldHRlci50cyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcXVlcnk6IFsnZ2V0JywgJ2RlbGV0ZSddLFxuICBib2R5OiBbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ11cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHR0cC13cmFwcGVycy9fbGliL2h0dHAtY2xpZW50LW1ldGhvZC1uYW1lcy50cyIsImltcG9ydCAqIGFzIF8gICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0h0dHBQYXJhbXMsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVybCwgYm9keSwgb3B0aW9ucywgcXVlcnlNZXRob2QpIHtcbiAgbGV0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuXG4gIGlmKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgdXJsID0gKHRoaXMuY29uZmlncy5iYXNlVXJsIHx8ICcnKSArIHVybDtcbiAgfVxuICBcbiAgaWYocXVlcnlNZXRob2QpIHtcbiAgICBpZihib2R5KSB7XG4gICAgICBsZXQge3BhcmFtc30gPSBib2R5O1xuICAgICAgaWYocGFyYW1zICYmICEocGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykpIHtcbiAgICAgICAgcGFyYW1zID0gXy5yZWR1Y2UocGFyYW1zLCAocGFyYW1zLCB2YWx1ZSwgbmFtZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwYXJhbXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSwgbmV3IEh0dHBQYXJhbXMoKSk7XG4gICAgICAgIFxuICAgICAgICBfLmV4dGVuZChib2R5LCB7cGFyYW1zfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IGJvZHk7XG4gIH1cbiAgXG4gIGlmKHRva2VuKSB7XG4gICAgaWYoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7aGVhZGVyczogbnVsbH07XG4gICAgfVxuICAgIFxuICAgIGxldCB7aGVhZGVyc30gPSBvcHRpb25zO1xuICAgIFxuICAgIGlmKCEoaGVhZGVycyBpbnN0YW5jZW9mIEh0dHBIZWFkZXJzKSkge1xuICAgICAgaGVhZGVycyA9IF8ucmVkdWNlKGhlYWRlcnMsIChoZWFkZXJzLCB2YWx1ZSwgbmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gaGVhZGVycy5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgfSwgbmV3IEh0dHBIZWFkZXJzKCkpXG4gICAgfVxuICAgIFxuICAgIG9wdGlvbnMuaGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3Rva2VufWApO1xuICAgIFxuICAgIGlmKHF1ZXJ5TWV0aG9kKSB7XG4gICAgICBib2R5ID0gb3B0aW9ucztcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBbdXJsLCBib2R5LCBvcHRpb25zXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9odHRwLXdyYXBwZXJzL3JlcXVlc3QtcHJlcHJvY2Vzc29yL3JlcXVlc3QtcHJlcHJvY2Vzc29yLnRzIiwiaW1wb3J0ICogYXMgXyAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtIdHRwQ2xpZW50UGx1c30gICBmcm9tICcuL19jb25zdHJ1Y3Rvci9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgaW5pdCAgICAgICAgICAgICAgIGZyb20gJy4vaW5pdGlhbGl6ZXIvaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHNldFRva2VuICAgICAgICAgICBmcm9tICcuL3Rva2VuLXNldHRlci90b2tlbi1zZXR0ZXInO1xuaW1wb3J0IHJlbW92ZVRva2VuICAgICAgICBmcm9tICcuL3Rva2VuLXJlbW92ZXIvdG9rZW4tcmVtb3Zlcic7XG5pbXBvcnQgZ2V0VG9rZW4gICAgICAgICAgIGZyb20gJy4vdG9rZW4tZ2V0dGVyL3Rva2VuLWdldHRlcic7XG5pbXBvcnQgaHR0cFdyYXBwZXJzICAgICAgIGZyb20gJy4vaHR0cC13cmFwcGVycy9odHRwLXdyYXBwZXJzJztcblxuXy5leHRlbmQoSHR0cENsaWVudFBsdXMucHJvdG90eXBlLCB7XG4gIGluaXQsXG4gIGdldFRva2VuLFxuICBzZXRUb2tlbixcbiAgcmVtb3ZlVG9rZW4sXG4gIC4uLmh0dHBXcmFwcGVyc1xufSk7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbSHR0cENsaWVudFBsdXNdXG59KSBjbGFzcyBIdHRwQ2xpZW50UGx1c01vZHVsZSB7fVxuXG5leHBvcnQge1xuICBIdHRwQ2xpZW50UGx1cyxcbiAgSHR0cENsaWVudFBsdXNNb2R1bGVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmctaHR0cC1jbGllbnQtcGx1cy50cyJdLCJzb3VyY2VSb290IjoiIn0=