import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpClientPlus {
  init;
  get;
  post;
  delete;
  put;
  patch;
  
  constructor(private http: HttpClient) {}
}
