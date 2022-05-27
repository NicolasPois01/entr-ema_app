import { Injectable, OnInit } from '@angular/core';
import { Product } from '../../modals/product.modal';
// import {connection} from '../../server/server';

@Injectable({
  providedIn: 'root'
})

export class ProductDBService implements OnInit {
constructor() { }

  products!: Product[];
  
  ngOnInit(): void {
    
    // const nbLine = pool.query("COUNT(*) from products");
    // for (let i = 0; i < this.nbLine; i++) {
      // console.log(pool.query("SELECT * from products WHERE productId="+2));
    //   this.products.push()
    //   console.log(this.products); 
    // }
  }
  
  defaultProduit: Product = {
    id: 0,
    name: '',
    price: 0,
    stock: 0,
    category: '',
    image: ''
  }

  

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
