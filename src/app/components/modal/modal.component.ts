import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()
  showModal:boolean = false;
  @Input()
  text:string = '';

  constructor() { }

  ngOnInit() {
  }

}
