import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitService } from './services/produit/produit.service';
import { UsersComponent } from './users/users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminProduitsComponent } from './admin/admin-produits/admin-produits.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminCreditComponent } from './admin/admin-credit/admin-credit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent,
    UsersComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminProduitsComponent,
    AdminComponent,
    AdminCreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
