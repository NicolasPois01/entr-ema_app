import { Injectable } from '@angular/core';
import { Produit } from '../modals/produit.modal';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[] = [];

  defaultProduit: Produit = {
    id: 0,
    nom: '',
    prix: 0,
    stock: 0,
    categorie: ''
  }

  constructor() { }

  createProduit(produit: Produit): void {
    this.produits.push(produit);
  }

  getProduitById(id: number): Produit {
    const produit: Produit | undefined = this.produits.find((produitObject) => {
      return produitObject.id === id;
    });
    if (produit) return produit;
    else return this.defaultProduit;
  }

  getIndexProduitById(id: number): number {
    const produitIndex: number = this.produits.findIndex((produitObject) => {
      return produitObject.id === id;
    });
    return produitIndex;
  }

  updateProduit(produit: Produit): void {
    const index : number = this.getIndexProduitById(produit.id);
    this.produits[index] = produit;
  }

  deleteProduit(id: number): void {
    const index: number = this.getIndexProduitById(id);
    this.produits.splice(index - 1, 1);
  }
}
