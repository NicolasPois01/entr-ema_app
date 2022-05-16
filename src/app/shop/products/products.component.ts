import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/modals/product.modal';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/product/product.service';
import { User } from 'src/app/modals/user.modal';

@Component({
  selector: 'app-produits',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  filter!: string;

  form!: FormGroup;

  currentUser!: User

  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    this.products = this.productService.products;
    this.filter = '';
    this.currentUser = this.authentificationService.currentUser;
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
