import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-item',
  templateUrl: './date-item.component.html',
  styleUrls: ['./date-item.component.scss']
})
export class DateItemComponent implements OnInit {
  @Input()
  date:Object = {};
  @Input()
  extraclass:String = '';

  constructor() {
    console.log('Constructor')
  }
  
  ngOnInit() {

  }

}
