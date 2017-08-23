(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("@angular/common/http"), require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "@angular/common/http", "@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["ngHttpPlus"] = factory(require("lodash"), require("@angular/common/http"), require("@angular/core"));
	else
		root["ngHttpPlus"] = factory(root["_"], root["ng"]["common"]["http"], root["ng"]["core"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_http_client_methods__ = __webpack_require__(9);



/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_2__lib_http_client_methods__["a" /* default */].reduce(function (prototypeExtension, method) {
    prototypeExtension[method] = function (url, body, options) {
        var _a = this.configs, configs = _a === void 0 ? { tokenName: null, baseUrl: null } : _a;
        var tokenName = configs.tokenName, baseUrl = configs.baseUrl;
        var token = sessionStorage.getItem(tokenName);
        if (url.indexOf('http') === -1) {
            url = (baseUrl || '') + url;
        }
        if (['get', 'delete'].indexOf(method) !== -1) {
            if (body) {
                var params = body.params;
                if (params && !(params instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"])) {
                    params = __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](params, function (params, value, name) {
                        return params.append(name, value);
                    }, new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"]());
                    __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](body, { params: params });
                }
            }
            if (token) {
                if (!body) {
                    body = {};
                }
                if (!body.params) {
                    body.params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"]();
                }
                body.params = body.params.append('token', token);
            }
        }
        else {
            if (token) {
                if (!body) {
                    body = {};
                }
                __WEBPACK_IMPORTED_MODULE_0_lodash__["extend"](body, { token: token });
            }
        }
        return this.http[method](url, body, options);
    };
    return prototypeExtension;
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
/* harmony default export */ __webpack_exports__["a"] = ['get', 'delete', 'post', 'put', 'patch'];


/***/ }),
/* 10 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ODMxMDJlOWRlNWNiYmRjODY3NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvbW1vblwiLFwiaHR0cFwiXSxcImNvbW1vbmpzXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb21tb24vaHR0cFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJjb3JlXCJdLFwiY29tbW9uanNcIjpcIkBhbmd1bGFyL2NvcmVcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvY29yZVwiLFwiYW1kXCI6XCJAYW5ndWxhci9jb3JlXCJ9Iiwid2VicGFjazovLy8uL3NyYy9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0dHAtd3JhcHBlcnMvaHR0cC13cmFwcGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZXIvaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLWdldHRlci90b2tlbi1nZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rva2VuLXJlbW92ZXIvdG9rZW4tcmVtb3Zlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4tc2V0dGVyL3Rva2VuLXNldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHR0cC13cmFwcGVycy9fbGliL2h0dHAtY2xpZW50LW1ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25nLWh0dHAtcGx1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ1A7QUFHekM7SUFXRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFYN0IsY0FBYztRQUQxQixnRkFBVSxFQUFFO3lDQVllLGdFQUFVO09BWHpCLGNBQWMsQ0FZMUI7SUFBRCxxQkFBQztDQUFBO0FBWjBCOzs7Ozs7Ozs7Ozs7O0FDSlk7QUFDYztBQUNNO0FBRTNELHdEQUFlLHlFQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFDLGtCQUFrQixFQUFFLE1BQU07SUFDakUsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFDakQscUJBQTBDLEVBQTFDLGlFQUEwQyxDQUFTO1FBQ25ELGlDQUFTLEVBQUUseUJBQU8sQ0FBWTtRQUNuQyxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlDLEVBQUUsRUFBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlCLENBQUM7UUFFRCxFQUFFLEVBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxFQUFFLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDSCx3QkFBTSxDQUFTO2dCQUNwQixFQUFFLEVBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksZ0VBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsTUFBTSxHQUFHLDhDQUFRLENBQUMsTUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJO3dCQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBRSxJQUFJLGdFQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUVyQiw4Q0FBUSxDQUFDLElBQUksRUFBRSxFQUFDLE1BQU0sVUFBQyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDSCxDQUFDO1lBRUQsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDVCxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNaLENBQUM7Z0JBRUQsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnRUFBVSxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkQsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNULEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ1QsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDWixDQUFDO2dCQUVELDhDQUFRLENBQUMsSUFBSSxFQUFFLEVBQUMsS0FBSyxTQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNuRHFCO0FBRTVCLHdEQUFjLFVBQVUsT0FBTztJQUM3Qiw4Q0FBUSxDQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sV0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQzs7Ozs7Ozs7QUNKRCx3REFBYztJQUNaLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEQsQ0FBQzs7Ozs7Ozs7QUNGRCx3REFBYztJQUNaLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRCxDQUFDOzs7Ozs7OztBQ0ZELHdEQUFjLFVBQVUsS0FBSztJQUMzQixjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hELENBQUM7Ozs7Ozs7O0FDRkQsd0RBQWUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakI7QUFDTztBQUNPO0FBQ007QUFDRDtBQUNFO0FBQ0U7QUFDRjtBQUNFO0FBRS9ELDhDQUFRLENBQUMsZ0ZBQWMsQ0FBQyxTQUFTLGFBQy9CLElBQUk7SUFDSixRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVcsbUZBQ1IsNkVBQVksRUFDZixDQUFDO0FBS0E7SUFBQTtJQUE0QixDQUFDO0lBQXZCLG9CQUFvQjtRQUg1Qiw4RUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsc0VBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsZ0ZBQWMsQ0FBQztTQUM1QixDQUFDO09BQU8sb0JBQW9CLENBQUc7SUFBRCwyQkFBQztDQUFBO0FBSzlCIiwiZmlsZSI6Im5nLWh0dHAtcGx1cy51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCIsIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIiwgXCJAYW5ndWxhci9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nSHR0cFBsdXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5nSHR0cFBsdXNcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdLCByb290W1wibmdcIl1bXCJjb21tb25cIl1bXCJodHRwXCJdLCByb290W1wibmdcIl1bXCJjb3JlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ODMxMDJlOWRlNWNiYmRjODY3NCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOltcIm5nXCIsXCJjb21tb25cIixcImh0dHBcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIixcImNvbW1vbmpzMlwiOlwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIixcImFtZFwiOlwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wibmdcIixcImNvcmVcIl0sXCJjb21tb25qc1wiOlwiQGFuZ3VsYXIvY29yZVwiLFwiY29tbW9uanMyXCI6XCJAYW5ndWxhci9jb3JlXCIsXCJhbWRcIjpcIkBhbmd1bGFyL2NvcmVcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudFBsdXMge1xuICBpbml0O1xuICBnZXQ7XG4gIHBvc3Q7XG4gIGRlbGV0ZTtcbiAgcHV0O1xuICBwYXRjaDtcbiAgZ2V0VG9rZW47XG4gIHNldFRva2VuO1xuICByZW1vdmVUb2tlbjtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY29uc3RydWN0b3IvY29uc3RydWN0b3IudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7SHR0cFBhcmFtc30gICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgaHR0cENsaWVudE1ldGhvZHMgZnJvbSAnLi9fbGliL2h0dHAtY2xpZW50LW1ldGhvZHMnO1xuXG5leHBvcnQgZGVmYXVsdCBodHRwQ2xpZW50TWV0aG9kcy5yZWR1Y2UoKHByb3RvdHlwZUV4dGVuc2lvbiwgbWV0aG9kKSA9PiB7XG4gIHByb3RvdHlwZUV4dGVuc2lvblttZXRob2RdID0gZnVuY3Rpb24odXJsLCBib2R5LCBvcHRpb25zKSB7XG4gICAgbGV0IHtjb25maWdzID0ge3Rva2VuTmFtZTogbnVsbCwgYmFzZVVybDogbnVsbH19ID0gdGhpcztcbiAgICBsZXQge3Rva2VuTmFtZSwgYmFzZVVybH0gPSBjb25maWdzO1xuICAgIGxldCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odG9rZW5OYW1lKTtcblxuICAgIGlmKHVybC5pbmRleE9mKCdodHRwJykgPT09IC0xKSB7XG4gICAgICB1cmwgPSAoYmFzZVVybCB8fCAnJykgKyB1cmw7XG4gICAgfVxuICAgIFxuICAgIGlmKFsnZ2V0JywgJ2RlbGV0ZSddLmluZGV4T2YobWV0aG9kKSAhPT0gLTEpIHtcbiAgICAgIGlmKGJvZHkpIHtcbiAgICAgICAgbGV0IHtwYXJhbXN9ID0gYm9keTtcbiAgICAgICAgaWYocGFyYW1zICYmICEocGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykpIHtcbiAgICAgICAgICBwYXJhbXMgPSBfLnJlZHVjZShwYXJhbXMsIChwYXJhbXMsIHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgbmV3IEh0dHBQYXJhbXMoKSk7XG4gICAgICAgICAgXG4gICAgICAgICAgXy5leHRlbmQoYm9keSwge3BhcmFtc30pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKHRva2VuKSB7XG4gICAgICAgIGlmKCFib2R5KSB7XG4gICAgICAgICAgYm9keSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighYm9keS5wYXJhbXMpIHtcbiAgICAgICAgICBib2R5LnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGJvZHkucGFyYW1zID0gYm9keS5wYXJhbXMuYXBwZW5kKCd0b2tlbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgaWYoIWJvZHkpIHtcbiAgICAgICAgICBib2R5ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIF8uZXh0ZW5kKGJvZHksIHt0b2tlbn0pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZF0odXJsLCBib2R5LCBvcHRpb25zKTtcbiAgfVxuICBcbiAgcmV0dXJuIHByb3RvdHlwZUV4dGVuc2lvbjtcbn0sIHt9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9odHRwLXdyYXBwZXJzL2h0dHAtd3JhcHBlcnMudHMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbmZpZ3MpIHtcbiAgXy5leHRlbmQodGhpcywge2NvbmZpZ3N9KTsgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemVyL2luaXRpYWxpemVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRoaXMuY29uZmlncy50b2tlbk5hbWUpOyAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9rZW4tZ2V0dGVyL3Rva2VuLWdldHRlci50cyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuY29uZmlncy50b2tlbk5hbWUpOyAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9rZW4tcmVtb3Zlci90b2tlbi1yZW1vdmVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odG9rZW4pIHtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmNvbmZpZ3MudG9rZW5OYW1lLCB0b2tlbik7ICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b2tlbi1zZXR0ZXIvdG9rZW4tc2V0dGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgWydnZXQnLCAnZGVsZXRlJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ107XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaHR0cC13cmFwcGVycy9fbGliL2h0dHAtY2xpZW50LW1ldGhvZHMudHMiLCJpbXBvcnQgKiBhcyBfICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge05nTW9kdWxlfSAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0h0dHBDbGllbnRQbHVzfSAgIGZyb20gJy4vX2NvbnN0cnVjdG9yL2NvbnN0cnVjdG9yJztcbmltcG9ydCBpbml0ICAgICAgICAgICAgICAgZnJvbSAnLi9pbml0aWFsaXplci9pbml0aWFsaXplcic7XG5pbXBvcnQgc2V0VG9rZW4gICAgICAgICAgIGZyb20gJy4vdG9rZW4tc2V0dGVyL3Rva2VuLXNldHRlcic7XG5pbXBvcnQgcmVtb3ZlVG9rZW4gICAgICAgIGZyb20gJy4vdG9rZW4tcmVtb3Zlci90b2tlbi1yZW1vdmVyJztcbmltcG9ydCBnZXRUb2tlbiAgICAgICAgICAgZnJvbSAnLi90b2tlbi1nZXR0ZXIvdG9rZW4tZ2V0dGVyJztcbmltcG9ydCBodHRwV3JhcHBlcnMgICAgICAgZnJvbSAnLi9odHRwLXdyYXBwZXJzL2h0dHAtd3JhcHBlcnMnO1xuXG5fLmV4dGVuZChIdHRwQ2xpZW50UGx1cy5wcm90b3R5cGUsIHtcbiAgaW5pdCxcbiAgZ2V0VG9rZW4sXG4gIHNldFRva2VuLFxuICByZW1vdmVUb2tlbixcbiAgLi4uaHR0cFdyYXBwZXJzXG59KTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtIdHRwQ2xpZW50UGx1c11cbn0pIGNsYXNzIEh0dHBDbGllbnRQbHVzTW9kdWxlIHt9XG5cbmV4cG9ydCB7XG4gIEh0dHBDbGllbnRQbHVzLFxuICBIdHRwQ2xpZW50UGx1c01vZHVsZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZy1odHRwLXBsdXMudHMiXSwic291cmNlUm9vdCI6IiJ9