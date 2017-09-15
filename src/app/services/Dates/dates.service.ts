import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatesService {
  dates:any[] = [];
  constructor(private http:Http) { }

  getAllDates() {
    return this.http.request('http://localhost:3000/api/date').map(res => {
      this.dates = res.json();
      return this.dates;
    });
  }
}
