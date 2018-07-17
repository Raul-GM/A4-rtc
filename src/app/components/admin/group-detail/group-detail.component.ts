import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { AdminService } from './../../../services/Admin/admin.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  public groupId:String = '';
  public group:Object = {
    name: '',
    visible: true,
  };

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private adminService:AdminService) {
    this.activatedRoute.params.subscribe( params=> {
      this.groupId = params.id;
      this.adminService.getGroup(this.groupId).subscribe(group => this.group = group);
    })
  }
  saveGroup (form:NgForm) {
    this.adminService.updateGroup(this.groupId, form.value).subscribe(res => {
      console.log('==>', res)
    })
  }
  ngOnInit() {}

}
