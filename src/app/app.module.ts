import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product/product.service';
import { UsersComponent } from './users/users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminCreditComponent } from './admin/admin-credit/admin-credit.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminProductEditComponent } from './admin/admin-product-edit/admin-product-edit.component';
import { AdminProductsEditStockComponent } from './admin/admin-products-edit-stock/admin-products-edit-stock.component';
import { AdminCreateProductComponent } from './admin/admin-create-product/admin-create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminProductsComponent,
    AdminComponent,
    AdminCreditComponent,
    AdminProductEditComponent,
    AdminProductsEditStockComponent,
    AdminCreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
