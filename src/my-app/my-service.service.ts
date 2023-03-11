import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MyServiceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('./data.json');
  }
}
