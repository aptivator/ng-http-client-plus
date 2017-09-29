import * as _                    from 'lodash';
import {HttpParams, HttpHeaders} from '@angular/common/http';

export default function(url, body, options, queryMethod) {
  let token = this.getToken();

  if(!url.startsWith('http')) {
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
  
  return [url, body, options];
}
