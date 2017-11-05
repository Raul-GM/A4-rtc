import { Component, OnInit } from '@angular/core';
import { DatesService } from './../../services/Dates/dates.service';
@Component({
  selector: 'app-list-of-dates',
  templateUrl: './list-of-dates.component.html',
  styleUrls: ['./list-of-dates.component.scss']
})
export class ListOfDatesComponent implements OnInit {
  public dates:any[] = [];
  constructor(private datesService:DatesService) { }

  ngOnInit() {
    this.datesService.getAllDates().subscribe(dates => {
      console.log('====>', dates);

      this.dates = dates.sort(this.compare);
    });
  }

  compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
}
