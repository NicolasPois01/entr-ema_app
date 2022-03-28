import { Injectable } from '@angular/core';
import { Product } from '../../modals/product.modal';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  produits: Product[] = [
    {
      id: 0,
      name: 'Pomme',
      price: 3,
      stock: 5,
      category: 'Fruits',
      image: ''
    },
    {
      id: 1,
      name: 'Salade',
      price: 1.5,
      stock: 4,
      category: 'Legume',
      image: ''
    }
  ];

  defaultProduit: Product = {
    id: 0,
    name: '',
    price: 0,
    stock: 0,
    category: '',
    image: ''
  }

  constructor() { }

  createProduit(produit: Product): void {
    this.produits.push(produit);
  }

  getProduitById(id: number): Product {
    const produit: Product | undefined = this.produits.find((produitObject) => {
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

  updateProduit(produit: Product): void {
    const index : number = this.getIndexProduitById(produit.id);
    this.produits[index] = produit;
  }

  deleteProduit(id: number): void {
    const index: number = this.getIndexProduitById(id);
    this.produits.splice(index - 1, 1);
  }
}
