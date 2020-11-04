import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import {
    GetQuoteComponent,
    LocationComponent,
    HomeownerComponent,
    PropertyComponent,
    QuotationComponent
} from './get-quote';

import { ListComponent } from './retrieve-quote/list/list.component';
import { ViewPoliciesComponent } from './view-policies/view-policies.component';;
import { FormComponent } from './get-quote/quotation/form/form.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        RegisterComponent,
        GetQuoteComponent,
        LocationComponent,
        HomeownerComponent,
        PropertyComponent,
        QuotationComponent,
        ListComponent,
        ViewPoliciesComponent,
        FormComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }