import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { UsersComponent } from './users/users.component';

import { AdminComponent } from './admin/admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminCreditComponent } from './admin/admin-credit/admin-credit.component';
import { AdminProductEditComponent } from './admin/admin-product-edit/admin-product-edit.component';
import { AdminCreateProductComponent } from './admin/admin-create-product/admin-create-product.component';

import { LogginComponent } from './account/loggin/loggin.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';

import { ProductsComponent } from './shop/products/products.component';
import { ProductCardComponent } from './shop/product-card/product-card.component';
import { SidebarComponent } from './shop/sidebar/sidebar.component';

import { UserService } from './services/user/user.service';
import { AuthentificationService } from './services/authentification/authentification.service';
import { ProductService } from './services/product/product.service';
import { BasketComponent } from './shop/basket/basket.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';

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
    AdminCreateProductComponent,
    LogginComponent,
    CreateAccountComponent,
    ProductCardComponent,
    SidebarComponent,
    BasketComponent,
    NavbarUserComponent,
    NavbarAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [ProductService, UserService, AuthentificationService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
