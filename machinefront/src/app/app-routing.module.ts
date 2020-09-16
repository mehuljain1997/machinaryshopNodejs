import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component'
import { RegistershopComponent } from './registershop/registershop.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SelectItemComponent } from './select-item/select-item.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{path: 'login', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: 'AddProduct', component: AddProductComponent},
{path: 'loginowner', component: OwnerLoginComponent},
{path: 'logincustomer', component: CustomerLoginComponent},
{path: 'registershop', component: RegistershopComponent},
{path: 'shopDetail',component: ShopDetailComponent},
{path: 'selectItem',component: SelectItemComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 



}
