import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminProduitsComponent } from './admin/admin-produits/admin-produits.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/produits', component: AdminProduitsComponent },
  { path: 'admin/users', component: AdminUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
