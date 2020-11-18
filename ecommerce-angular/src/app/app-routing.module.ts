import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { CompaniesComponent } from './company/companies/companies.component';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductComponent } from './products/product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductComponent ,canActivate: [AuthGuard]},
  { path: 'product-add', component: ProductAddComponent ,canActivate: [AuthGuard]},
  { path: 'product-detail/:id', component: ProductDetailComponent ,canActivate: [AuthGuard]},
  { path: 'product-edit/:id', component: ProductEditComponent ,canActivate: [AuthGuard]},
	{ path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard]},
  { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
