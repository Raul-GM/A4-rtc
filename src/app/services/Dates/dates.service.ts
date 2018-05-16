import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatesService {
  dates:any[] = [];
  date:any = {};
  constructor(private http:Http) { }

  getAllDates() {
    return this.http.request('http://localhost:3000/api/date').map(res => {
      this.dates = res.json();
      return this.dates;
    });
  }

  getDate(id) {
    return this.http.request(`http://localhost:3000/api/date/${id}`).map(res => {
      this.date = res.json();
      return this.date;
    });
  }
}
