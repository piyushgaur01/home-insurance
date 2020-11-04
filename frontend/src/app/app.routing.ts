import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { GetQuoteComponent } from './get-quote';
import { ListComponent } from './retrieve-quote/list/list.component';
import { QuotationComponent } from './get-quote';
import { ViewPoliciesComponent } from './view-policies/view-policies.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'get-quote',
        component: GetQuoteComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'retrieve-quotes',
        component: ListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'quotation',
        component: QuotationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'all-policies',
        component: ViewPoliciesComponent,
        canActivate: [AuthGuard]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);