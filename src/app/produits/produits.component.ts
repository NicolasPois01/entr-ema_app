import { Component, OnInit } from '@angular/core';
import { Produit } from '../modals/produit.modal';
import { ProduitService } from '../services/produit/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produits!: Produit[];

  filter!: string;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produits = this.produitService.produits;
    this.filter = '';
  }

  setFilter(filter: string): void{
    this.filter = filter;
  }

}
