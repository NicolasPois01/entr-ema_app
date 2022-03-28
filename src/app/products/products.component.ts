import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product.modal';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-produits',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  produits!: Product[];

  filter!: string;

  constructor(private produitService: ProductService) { }

  ngOnInit(): void {
    this.produits = this.produitService.produits;
    this.filter = '';
  }

  setFilter(filter: string): void{
    this.filter = filter;
  }

}
