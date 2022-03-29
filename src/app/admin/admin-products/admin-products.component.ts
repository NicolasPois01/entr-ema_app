import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product.modal';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  constructor(private produitService: ProductService,
    private route: Router) { }

  products!: Product[]

  ngOnInit(): void {
    this.products = this.produitService.products;
  }

  navigate(productID: number): void{
    this.route.navigate(['/admin/products/edit/' + productID]);
  }
}
