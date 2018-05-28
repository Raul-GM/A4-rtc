import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/Admin/admin.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public showModal:boolean = false;

  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }

  loadMetalcry = () => {
    this.adminService.loadMC().subscribe(status => {
      if(status === 200) this.showModal = true
    })
  }
}
