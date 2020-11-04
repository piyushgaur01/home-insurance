import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less']
})
export class LocationComponent implements OnInit {
  @Input() locationForm: FormGroup;
  @Output() formValue = new EventEmitter<any>();
  submitted = false;
  residenceTypes: string[] = ['Single-Family Home', 'Condo', 'Townhouse', 'Row house', 'Duplex', 'Apartment'];
  residenceUses: string[] = ['Primary', 'Secondary', 'Rental Property'];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.locationForm.controls; }

  save() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.locationForm.invalid) {
      return;
    }
    this.formValue.emit(this.locationForm.value);
  }
}
