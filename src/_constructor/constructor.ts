import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpClientPlus {
  public init;
  public getToken;
  public setToken;
  public removeToken;
  public get;
  public post;
  public put;
  public patch;
  public delete;
  
  constructor(private http: HttpClient) {}
}
