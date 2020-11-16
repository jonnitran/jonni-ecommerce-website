import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { CommpaniesListComponent } from './commpanies-list/commpanies-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';
import { ProductStoreComponent } from './products/product-store/product-store.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductComponent } from './products/product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', component: ProductComponent },
	{ path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-delete', component: ProductDeleteComponent},
  { path: 'product-update', component: ProductUpdateComponent},
  { path: 'product-store', component: ProductStoreComponent},
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: 'services', component: ServicesComponent, canActivate: [AuthGuard]},
  {path: 'companies-list', component: CommpaniesListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
