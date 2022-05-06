import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modals/product.modal';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent implements OnInit {

  product!: Product;

  form!: FormGroup

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.product = this.productService.getProductById(+this.route.snapshot.params['id']);
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      name: this.product.name,
      price: this.product.price,
      stock: 0,
      category: this.product.category,
      image: this.product.image,
    });
  }

  onCancel(): void {
    this.router.navigate(['/admin/produits']);
  }

  onSubmit(): void {
    const formValues = this.form.value;
    const newStock: number = this.product.stock + formValues['stock'];
    if (newStock >= 0){
     let updatedProduct: Product = {
       id: this.product.id,
       name: formValues['name'],
       price: formValues['price'],
       stock: newStock,
       category: formValues['category'],
       image: formValues['image']
     }
    this.productService.updateProduct(updatedProduct);
    this.router.navigate(['/admin/products']); 
    }
  }

  navigate(productId: number): void {
    this.router.navigate(['/admin/products/edit/stock/' + productId]);
    console.log('/admin/products/edit/stock/' + productId);
  }
}
