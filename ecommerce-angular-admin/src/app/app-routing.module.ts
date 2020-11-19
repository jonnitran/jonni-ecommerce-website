
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard]},
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard]},
  { path: 'company-edit/:_id', component: CompanyEditComponent, canActivate: [AuthGuard]},
  { path: 'products-list', component: ProductsListComponent, canActivate: [AuthGuard]},
  { path: 'product-edit/:_id', component: ProductEditComponent, canActivate: [AuthGuard]},
  { path: 'customers-list', component: CustomerListComponent, canActivate: [AuthGuard]},
  { path: 'customer-edit/:_id', component: CustomerEditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
