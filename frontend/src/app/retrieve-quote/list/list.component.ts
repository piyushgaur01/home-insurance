import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, PolicyService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  quotations: any = [];
  loading = true;
  username;
  constructor(
    private policyService: PolicyService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = this.authService.currentUserValue.username;
    this.policyService.getQuotationsByUsername(this.username)
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(() => {
            this.loading = false;
            this.quotations = data;

          }, 500);
        }
      )
  }

  viewDetails(quote) {

    this.policyService.setQuotationData(quote);
    this.router.navigate(['/quotation']);
  }
}
