import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() showModal:boolean = false;
  @Input() text:string = '';
  @Output() closeModal:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  close() {
    this.closeModal.emit(true)
  }
}
