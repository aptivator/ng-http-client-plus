import * as _ from 'lodash';
import { HttpParams, HttpHeaders } from '@angular/common/http';
export default function (url, body, options, queryMethod) {
    var token = this.getToken();
    if (!url.startsWith('http')) {
        url = (this.configs.baseUrl || '') + url;
    }
    if (queryMethod) {
        if (body) {
            var params = body.params;
            if (params && !(params instanceof HttpParams)) {
                params = _.reduce(params, function (params, value, name) {
                    return params.append(name, value);
                }, new HttpParams());
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
        if (!(headers instanceof HttpHeaders)) {
            headers = _.reduce(headers, function (headers, value, name) {
                return headers.append(name, value);
            }, new HttpHeaders());
        }
        options.headers = headers.append('Authorization', "Bearer " + token);
        if (queryMethod) {
            body = options;
        }
    }
    return [url, body, options];
}
//# sourceMappingURL=request-preprocessor.js.map