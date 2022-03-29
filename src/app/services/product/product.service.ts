import { Injectable } from '@angular/core';
import { Product } from '../../modals/product.modal';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
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

  createProduct(newName: string, newPrice: number, newStock: number, newCategory: string, newImage: string): void {
    let newProduct : Product = {
      id: this.products[this.products.length - 1].id + 1,
      name: newName,
      price: newPrice,
      stock: newStock,
      category: newCategory,
      image: newImage
    };
    this.products.push(newProduct);
  }

  getProductById(id: number): Product {
    const produit: Product | undefined = this.products.find((produitObject) => {
      return produitObject.id === id;
    });
    if (produit) return produit;
    else return this.defaultProduit;
  }

  getIndexProductById(id: number): number {
    const produitIndex: number = this.products.findIndex((produitObject) => {
      return produitObject.id === id;
    });
    return produitIndex;
  }

  updateProduct(produit: Product): void {
    const index : number = this.getIndexProductById(produit.id);
    this.products[index] = produit;
  }

  deleteProduct(id: number): void {
    const index: number = this.getIndexProductById(id);
    this.products.splice(index - 1, 1);
  }

  addStock(amount: number, idProduct: number): void {
    let product: Product = this.getProductById(idProduct);
    product.stock += amount;
    this.updateProduct(product);
  }

  removeStock(amount: number, idProduct: number): void {
    let product: Product = this.getProductById(idProduct);
    product.stock -= amount;
    this.updateProduct(product);
  }
}
