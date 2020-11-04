import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '@app/_services';
import { first } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.less']
})
export class QuotationComponent implements OnInit {
  @Input() isRouted: boolean;
  @Output() pageIndexEvent = new EventEmitter<number>();
  quotationForm: any;
  submitted: boolean = false;
  loading: boolean = false;
  startdate;
  invalidStartDate: boolean;
  error: string = '';
  success: string = '';
  policyExists: boolean;
  constructor(private policyService: PolicyService, private router: Router) { }

  ngOnInit() {

    if (typeof this.policyService.getQuotationData() !== 'undefined') {
      this.quotationForm = this.policyService
        .calculatePremium(this.policyService.getQuotationData());
      this.policyService.getPolicyByQuotationId(this.quotationForm.id)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.policyExists = true;
          } else {
            this.policyExists = false;
          }
        }
      );
    } else {
      this.router.navigate(['/']);
    }
  }

  changePageIndex(val) {
    this.pageIndexEvent.emit(val);
  }

  buyPolicy() {
    this.submitted = true;
    this.loading = true;
    this.invalidStartDate = false;
    if (this.startdate) {

      this.policyService.buyPolicy({
        startdate: this.startdate,
        quotationId: this.quotationForm.id,
        username: this.quotationForm.username,
        status: 'active'
      })
        .pipe(first())
        .subscribe(
          data => {
            this.loading = false;
            if (data) {

              this.success = `Policy bought successfully, policy id: ${data.body.id}`;
            } else {
              this.error = 'Sorry! Policy purchase failed!';
            }
          }
        );
    } else {
      this.invalidStartDate = true;
    }
  }

  showModal(): void {
    $("#myModal").modal('show');
  }
}
