import * as _                    from 'lodash';
import {HttpParams, HttpHeaders} from '@angular/common/http';
import httpClientMethodNames     from './_lib/http-client-method-names';

export default _.reduce(httpClientMethodNames, (proto, methodNames, methodType) => {
  return _.reduce(methodNames, (proto, methodName) => {
    return _.extend(proto, {
      [methodName]: function(url, body, options) {
        let token = this.getToken();
        let queryMethod = methodType === 'query';
    
        if(url.indexOf('http') === -1) {
          url = (this.configs.baseUrl || '') + url;
        }
        
        if(queryMethod) {
          if(body) {
            let {params} = body;
            if(params && !(params instanceof HttpParams)) {
              params = _.reduce(params, (params, value, name) => {
                return params.append(name, value);
              }, new HttpParams());
              
              _.extend(body, {params});
            }
          }
    
          options = body;
        }
        
        if(token) {
          if(!options) {
            options = {headers: null};
          }
          
          let {headers} = options;
          
          if(!(headers instanceof HttpHeaders)) {
            headers = _.reduce(headers, (headers, value, name) => {
              return headers.append(name, value);
            }, new HttpHeaders())
          }
          
          options.headers = headers.append('Authorization', `Bearer ${token}`);
          
          if(queryMethod) {
            body = options;
          }
        }
        
        return this.http[methodName](url, body, options);
      }
    });
  }, proto);
}, {});
