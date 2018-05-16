import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatesService } from './../../services/Dates/dates.service';

@Component({
  selector: 'app-date-detail',
  templateUrl: './date-detail.component.html',
  styleUrls: ['./date-detail.component.scss']
})
export class DateDetailComponent implements OnInit {
  public date:any = {};
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private datesService:DatesService) {
    this.activatedRoute.params.subscribe( params=> {
      const id = params.id;
      this.datesService.getDate(id).subscribe(date => {
        console.log('=>=>=>=>=>', date)
        this.date = date;
      });
    })
  }

  ngOnInit() {
  }

}
