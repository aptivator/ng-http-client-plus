import * as _            from 'lodash';
import {HttpParams}      from '@angular/common/http';
import httpClientMethods from './_lib/http-client-methods';

export default httpClientMethods.reduce((prototypeExtension, method) => {
  prototypeExtension[method] = function(url, body, options) {
    let {configs = {tokenName: null, baseUrl: null}} = this;
    let {tokenName, baseUrl} = configs;
    let token = sessionStorage.getItem(tokenName);

    if(url.indexOf('http') === -1) {
      url = (baseUrl || '') + url;
    }
    
    if(['get', 'delete'].indexOf(method) !== -1) {
      if(body) {
        let {params} = body;
        if(params && !(params instanceof HttpParams)) {
          params = _.reduce(params, (params, value, name) => {
            return params.append(name, value);
          }, new HttpParams());
          
          _.extend(body, {params});
        }
      }
      
      if(token) {
        if(!body) {
          body = {};
        }
        
        if(!body.params) {
          body.params = new HttpParams();
        }
        
        body.params = body.params.append('token', token);
      }
    } else {
      if(token) {
        if(!body) {
          body = {};
        }
        
        _.extend(body, {token});
      }
    }
    
    return this.http[method](url, body, options);
  }
  
  return prototypeExtension;
}, {});
