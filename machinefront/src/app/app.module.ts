import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatButtonModule, MatInputModule,MatFormFieldModule,MatOptionModule,MatSelectModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RegistershopComponent } from './registershop/registershop.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SelectItemComponent } from './select-item/select-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OwnerLoginComponent,
    CustomerLoginComponent,
    RegistershopComponent,
    ShopDetailComponent,
    AddProductComponent,
    SelectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
