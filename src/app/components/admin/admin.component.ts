import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/Admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public showModal:boolean = false;
  public groups:any[] = [];

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getAllGroups().subscribe(groups => {
      console.log('>', groups)
      this.groups = groups
    });
  }

  loadMetalcry = () => {
    this.adminService.loadMC().subscribe(status => {
      if(status === 200) this.showModal = true
    })
  }
  updateImages = () => {
    this.adminService.updateAllImages().subscribe(status => {
      if(status === 200) this.showModal = true
    })
  }
  handleCloseModal = arg => {
    this.showModal = !arg
  }
  deleteAll = () => {
    this.adminService.deleteAll().subscribe(status => {
      if(status === 200) this.showModal = true
    })
  }
}
