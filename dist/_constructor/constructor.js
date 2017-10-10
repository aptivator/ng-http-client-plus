import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var HttpClientPlus = /** @class */ (function () {
    function HttpClientPlus(http) {
        this.http = http;
    }
    HttpClientPlus.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HttpClientPlus.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    return HttpClientPlus;
}());
export { HttpClientPlus };
//# sourceMappingURL=constructor.js.map