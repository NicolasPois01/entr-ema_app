import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../modals/product.modal';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { ProductService } from '../services/product/product.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-produits',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  filter!: string;

  form!: FormGroup;

  constructor(private produitService: ProductService,
    private authentificationService: AuthentificationService,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.products = this.produitService.products;
    this.filter = '';
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      quantity: 0
    });
  }

  setFilter(filter: string): void{
    this.filter = filter;
  }
}
