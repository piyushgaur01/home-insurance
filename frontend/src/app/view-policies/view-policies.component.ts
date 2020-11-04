import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, PolicyService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view-policies',
  templateUrl: './view-policies.component.html',
  styleUrls: ['./view-policies.component.less']
})
export class ViewPoliciesComponent implements OnInit {
  policies: any;
  loading: boolean;
  constructor(
    private authService: AuthenticationService,
    private policyService: PolicyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTable();
  }

  updatePolicy(policy, action) {
    this.loading = true;
    policy.status = action;
    this.policyService.buyPolicy(policy)
      .pipe(first())
      .subscribe(
        data => {
          this.refreshTable();
        }
      );
  }

  refreshTable() {
    this.policyService.getAllPolicies(this.authService.currentUserValue.username)
    .pipe(first())
    .subscribe(
      data => {
        if(data){
          this.policies = data;
          this.loading = false;
        }
      }
    );
  }

  viewDetails(quotationId) {

    this.policyService.getQuotationById(quotationId)
    .pipe(first())
    .subscribe(
      data => {
        if(data){

          this.policyService.setQuotationData(data);
          this.router.navigate(['/quotation']);
        }
      }
    );
  }

}
