import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/modals/produit.modal';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-admin-produits',
  templateUrl: './admin-produits.component.html',
  styleUrls: ['./admin-produits.component.scss']
})
export class AdminProduitsComponent implements OnInit {

  constructor(private produitService: ProduitService,
    private route: Router) { }

  produits!: Produit[]

  ngOnInit(): void {
    this.produits = this.produitService.produits;
  }

  navigate(productID: number): void{
    this.route.navigate(['/admin/produits/edit/' + productID]);
  }
}
