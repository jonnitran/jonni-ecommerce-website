import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';
import { ProductRetrieveComponent } from './products/product-retrieve/product-retrieve.component';
import { ProductRetrieveByIdComponent } from './products/product-retrieve-by-id/product-retrieve-by-id.component';
import { ProductStoreComponent } from './products/product-store/product-store.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CommpaniesListComponent } from './commpanies-list/commpanies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDeleteComponent,
    ProductRetrieveComponent,
    ProductRetrieveByIdComponent,
    ProductStoreComponent,
    ProductUpdateComponent,
    ProductComponent,
    CartComponent,
    HeaderComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    CommpaniesListComponent,

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
