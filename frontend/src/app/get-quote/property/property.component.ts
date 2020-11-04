import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.less']
})
export class PropertyComponent implements OnInit {
  @Input() propertyForm: FormGroup;
  @Output() formValue = new EventEmitter<any>();
  @Output() pageIndexEvent = new EventEmitter<number>();
  submitted = false;
  loading = false;
  dwellingStyles: string[] = ['1 story', '1.5 story', '2 story', '2.5 story', '3 story'];
  roofMaterials: string[] = ['Concrete', 'Clay', 'Rubber', 'Steel', 'Tin', 'Wood'];
  garage: string[] = ['Attached', 'Detached', 'Basement', 'Built-in', 'none'];
  fullBaths: string[] = ['1', '2', '3', 'more than 3'];
  halfBaths: string[] = ['1', '2', '3', 'more than 3'];
  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.propertyForm.controls; }

  changePageIndex(val) {
    this.pageIndexEvent.emit(val);
  }

  save() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.propertyForm.invalid) {
      return;
    }
    this.loading = true;
    this.formValue.emit(this.propertyForm.value);
  }
}
