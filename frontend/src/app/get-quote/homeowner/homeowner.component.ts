import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-homeowner',
  templateUrl: './homeowner.component.html',
  styleUrls: ['./homeowner.component.less']
})
export class HomeownerComponent implements OnInit {
  @Input() homeownerForm: FormGroup;
  @Output() formValue = new EventEmitter<any>();
  @Output() pageIndexEvent = new EventEmitter<number>();
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.homeownerForm.controls; }

  changePageIndex(val) {
    this.pageIndexEvent.emit(val);
  }

  save() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.homeownerForm.invalid) {
      return;
    }
    this.formValue.emit(this.homeownerForm.value);
  }

}
