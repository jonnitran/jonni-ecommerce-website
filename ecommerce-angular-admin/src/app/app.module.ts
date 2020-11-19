import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    CompaniesListComponent,
    ProductsListComponent,
    CompanyEditComponent,
    ProductEditComponent,
    CustomerEditComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
