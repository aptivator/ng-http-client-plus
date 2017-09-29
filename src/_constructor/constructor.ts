import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpClientPlus {
  constructor(private http: HttpClient) {}
}
