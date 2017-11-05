import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-calendar',
  templateUrl: './date-calendar.component.html',
  styleUrls: ['./date-calendar.component.scss']
})
export class DateCalendarComponent implements OnInit {
  @Input()
  city:String = "";
  @Input()
  date:String = "";
  @Input()
  hour:String = "";

  constructor() { }

  ngOnInit() {
  }

}
