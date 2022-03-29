import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product.modal';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.scss']
})
export class AdminCreateProductComponent implements OnInit {

  product!: Product;

  form!: FormGroup;

  constructor(private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      name: '',
      price: '',
      stock: '',
      category: '',
      image: ''
    });
  }

  onSubmit(): void {
    const formValues = this.form.value;
    if (formValues['price'] > 0 && formValues['stock'] > 0 && formValues['name'] != '') {
      this.productService.createProduct(formValues['name'], formValues['price'], 
      formValues['stock'], formValues['category'], formValues['image']);
      this.router.navigate(['/admin/products']);
    }
    else{
      console.log('Formulaire invalide');
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin/products']);
  }

}
