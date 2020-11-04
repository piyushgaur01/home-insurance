import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService, PolicyService } from '@app/_services';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.less']
})
export class GetQuoteComponent implements OnInit {
  pageIndex = 0;
  error = '';
  pages: string[] = ['Location Details', 'Homeowner Information', 'Property Information', 'Quotation'];
  locationForm: FormGroup;
  homeownerForm: FormGroup;
  propertyForm: FormGroup;
  quotationForm;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private policyService: PolicyService
  ) { }

  ngOnInit() {
    this.locationForm = this.formBuilder.group({
      residenceType: ['Single-Family Home', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      residenceUse: ['Primary', Validators.required]
    });

    this.homeownerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      retired: ['no', Validators.required],
      ssn: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.propertyForm = this.formBuilder.group({
      marketValue: ['', Validators.required],
      yearBuilt: ['', Validators.required],
      footage: ['', Validators.required],
      dwellingStyle: ['1 story', Validators.required],
      roofMaterial: ['Concrete', Validators.required],
      garage: ['Attached', Validators.required],
      fullBath: ['1', Validators.required],
      halfBath: ['1', Validators.required],
      swimmingPool: ['no', Validators.required],
    });

  }

  changePageIndex(val) {
    this.pageIndex = val;
  }

  generateQuotation() {
    const form = {
      username: this.authenticationService.currentUserValue.username,
      location: this.locationForm.value,
      homeowner: this.homeownerForm.value,
      property: this.propertyForm.value
    };



    this.policyService.createQuotation(form)
      .pipe(first())
      .subscribe(
        data => {
          if (data && data.message === 'Error creating quotation') {
            this.error = data.message;
          } else {
            this.pageIndex = 3;
            this.policyService.setQuotationData(this.policyService.calculatePremium(data.body));
          }
        },
        error => {
          this.error = 'Error creating quotation';
        });

  }

  addFormValues(value, type) {
    switch (type) {
      case 'location':
        this.pageIndex = 1;
        break;
      case 'homeowner':
        this.pageIndex = 2;
        break;
      case 'property':
        this.generateQuotation();
        break;
      default:
        break;
    }
  }
}
