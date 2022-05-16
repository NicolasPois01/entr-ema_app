import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreditComponent } from './admin/admin-credit/admin-credit.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminProductEditComponent } from './admin/admin-product-edit/admin-product-edit.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './shop/products/products.component';
import { UsersComponent } from './users/users.component';
import { AdminCreateProductComponent } from './admin/admin-create-product/admin-create-product.component';
import { LogginComponent } from './account/loggin/loggin.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/users', component: AdminUsersComponent},
  { path: 'admin/users/credit/:id', component: AdminCreditComponent },
  { path: 'admin/products/edit/:id', component: AdminProductEditComponent },
  { path: 'admin/products/new_product', component: AdminCreateProductComponent },
  { path: 'login', component: LogginComponent },
  { path: 'new_account', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
