import * as _                from 'lodash';
import httpClientMethodNames from './_lib/http-client-method-names';
import requestPreprocessor   from './request-preprocessor/request-preprocessor'; 

export default _.reduce(httpClientMethodNames, (proto, methodNames, methodType) => {
  let queryMethod = methodType === 'query';
  
  return _.reduce(methodNames, (proto, methodName) => {
    return _.extend(proto, {
      [methodName]: function(url, body, options) {
        let args = requestPreprocessor.call(this, url, body, options, queryMethod);
        return this.http[methodName](...args);
      }
    });
  }, proto);
}, {});
