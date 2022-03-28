import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modals/product.modal';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-products-edit-stock',
  templateUrl: './admin-products-edit-stock.component.html',
  styleUrls: ['./admin-products-edit-stock.component.scss']
})
export class AdminProductsEditStockComponent implements OnInit {

  product!: Product

  form!: FormGroup

  constructor(private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this.productService.getProductById(+this.route.snapshot.params['id']);
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      action: 'add',
      amount: 0
    });
  }

  onSubmit(): void {
    const formValues = this.form.value;
    console.log(formValues);
    if (formValues['amount'] > 0) {
      if (formValues['action'] === 'add'){
        this.productService.addStock(+formValues['amount'], this.product.id);
      }
      else if (formValues['action'] === 'remove'){
        this.productService.removeStock(+formValues['amount'], this.product.id);
      }
      this.router.navigate(['/admin/products']);
    }
    else{
      console.log('Quantité invalide');
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin/products']);
  }

}
