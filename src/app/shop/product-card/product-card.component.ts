import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../modals/product.modal';
import { AuthentificationService } from '../../services/authentification/authentification.service';
import { UserService } from '../../services/user/user.service';

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
    const formValues = this.form.value;
    if (formValues['quantity'] > 0 ) {
      this.userService.addProductToBasket(product, formValues['quantity'], this.authentificationService.currentUser.id);
      console.log("added");
    }
  }
}
