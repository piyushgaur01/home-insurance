import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  @Input() quotationForm: any;
  @Output() openModal = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  showModal(){
    this.openModal.emit();
  }

}
