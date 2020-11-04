import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  quotationData: any;
  constructor(private http: HttpClient) { }

  setQuotationData(data: any) {
    this.quotationData = data;
  }

  getQuotationData(): any {
    return this.quotationData;
  }

  createQuotation(quotation: any): any {
    return this.http.post(`${environment.apiUrl}/quotation`, quotation, { observe: 'response' })
      .pipe(map(q => {
        if (q) {
          return q;
        } else {
          return { message: 'Error creating quotation' };
        }
      }));
  }

  getQuotationsByUsername(username: string) {
    return this.http.get(`${environment.apiUrl}/quotations/${username}`);
  }

  getQuotationById(id: string) {
    return this.http.get(`${environment.apiUrl}/quotation/${id}`);
  }

  buyPolicy(policyForm: any): any {
    return this.http.post(`${environment.apiUrl}/policy`, policyForm, { observe: 'response' })
      .pipe(map(q => {
        if (q) {
          return q;
        } else {
          return { message: 'Error creating quotation' };
        }
      }));
  }

  getPolicyByQuotationId(id: string) {
    return this.http.get(`${environment.apiUrl}/policy/${id}`);
  }

  getAllPolicies(username: string) {
    if(username === 'admin') {
      return this.http.get(`${environment.apiUrl}/policies`);
    } else {
      return this.http.get(`${environment.apiUrl}/policies/${username}`);
    }
  }

  calculatePremium(form) {
    const houseAge = this.calculateAge(new Date(form.property.yearBuilt));
    let rate = 0.0;
    let reduction = 0.0;
    switch (form.location.residenceType) {
      case 'Single-Family Home':
        rate = 0.005;
        break;
      case 'Condo':
      case 'Duplex':
      case 'Apartment':
        rate = 0.006;
        break;
      case 'Townhouse':
      case 'Row house':
        rate = 0.007;
        break;
      default:
        break;
    }

    if (houseAge < 5) {
      reduction = 0.1;
    } else if (houseAge >= 5 && houseAge < 10) {
      reduction = 0.2;
    } else if (houseAge >= 10 && houseAge < 20) {
      reduction = 0.3;
    } else {
      reduction = 0.5;
    }

    const monthlyPremium = (((5 * (form.property.marketValue / 1000)) + (5 * (form.property.marketValue / 1000)) * rate) / 12);
    let homeValue = (120 * form.property.footage);
    homeValue -= homeValue * reduction;
    const dwellingCoverage = (homeValue + form.property.marketValue * 0.5);
    const detachedStructures = Number(0.1 * dwellingCoverage);
    const personalProperty = Number(0.6 * dwellingCoverage);
    const additionalLivingExpenses = Number(0.2 * dwellingCoverage);
    const medicalExpense = (5000);

    return Object.assign(form, {
      monthlyPremium,
      dwellingCoverage,
      detachedStructures,
      personalProperty,
      additionalLivingExpenses,
      medicalExpense
    });
  }

  calculateAge(day) { // birthday is a date
    var ageDifMs = Date.now() - day;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
