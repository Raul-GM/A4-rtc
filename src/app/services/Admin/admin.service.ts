import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  groups:any[] = [];
  constructor(private http:Http) { }

  loadMC() {
    return this.http.request('http://localhost:3000/api/date/load/mc')
      .map(res => res.status)
  }
  getAllGroups() {
    return this.http.request('http://localhost:3000/api/date/groups')
      .map(res => {
        this.groups = res.json();
        return this.groups;
      })
  }
  updateAllImages() {
    return this.http.request('http://localhost:3000/api/date/images/update')
      .map(res => res.status)
  }
  deleteAll() {
    return this.http.delete('http://localhost:3000/api/date/', {})
      .map(res => res.status)
  }
}
