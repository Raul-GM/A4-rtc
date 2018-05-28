import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  constructor(private http:Http) { }

  loadMC() {
    return this.http.request('http://localhost:3000/api/date/load/mc')
      .map(res => res.status)
  }
}
