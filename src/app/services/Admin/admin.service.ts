import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  groups:any[] = [];
  group:Object = {
    _id: '',
    name: '',
    visible: true,
    image: {
      big: '',
    }
  };
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
  getGroup(id) {
    return this.http.request(`http://localhost:3000/api/date/groups/${id}`)
      .map(res => {
        this.group = res.json();
        return this.group;
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
  updateGroup(id, group) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('))))))))))))>>>', group)
    return this.http.put(`http://localhost:3000/api/date/group/update/${id}`,
      JSON.stringify(group),
      {params:group, headers:headers})
        .map(res => res.status)
  }
}
