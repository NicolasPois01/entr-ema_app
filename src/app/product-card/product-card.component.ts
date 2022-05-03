import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../modals/product.modal';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product

  form!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      quantity: 0
    });
  }

  addProduct(product: Product): void {
    this.userService.addProductToBasket(product, 0, this.authentificationService.currentUser.id);
  }
}
