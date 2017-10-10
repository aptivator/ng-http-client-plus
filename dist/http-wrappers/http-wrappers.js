import * as _ from 'lodash';
import httpClientMethodNames from './_lib/http-client-method-names';
import requestPreprocessor from './request-preprocessor/request-preprocessor';
export default _.reduce(httpClientMethodNames, function (proto, methodNames, methodType) {
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
//# sourceMappingURL=http-wrappers.js.map