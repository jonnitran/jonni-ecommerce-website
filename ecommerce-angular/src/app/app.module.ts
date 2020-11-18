import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CompaniesComponent } from './company/companies/companies.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    HeaderComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    CompaniesComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
