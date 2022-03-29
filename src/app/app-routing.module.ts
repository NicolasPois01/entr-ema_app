import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreditComponent } from './admin/admin-credit/admin-credit.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminProductEditComponent } from './admin/admin-product-edit/admin-product-edit.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { AdminProductsEditStockComponent } from './admin/admin-products-edit-stock/admin-products-edit-stock.component';
import { AdminCreateProductComponent } from './admin/admin-create-product/admin-create-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/users', component: AdminUsersComponent},
  { path: 'admin/users/credit/:id', component: AdminCreditComponent },
  { path: 'admin/products/edit/:id', component: AdminProductEditComponent },
  { path: 'admin/products/edit/stock/:id', component: AdminProductsEditStockComponent},
  { path: 'admin/products/new_product', component: AdminCreateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
