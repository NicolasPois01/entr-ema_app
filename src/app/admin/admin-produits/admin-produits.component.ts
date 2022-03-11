import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/modals/produit.modal';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-admin-produits',
  templateUrl: './admin-produits.component.html',
  styleUrls: ['./admin-produits.component.scss']
})
export class AdminProduitsComponent implements OnInit {

  constructor(private produitService: ProduitService) { }

  produits!: Produit[]

  ngOnInit(): void {
    this.produits = this.produitService.produits;
  }

}
