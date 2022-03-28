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

  produit!: Product;

  form!: FormGroup

  constructor(private produitService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.produit = this.produitService.getProduitById(+this.route.snapshot.params['id']);
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      nom: this.produit.name,
      prix: this.produit.price,
      stock: this.produit.stock,
      categorie: this.produit.category,
      image: this.produit.image
    });
  }

  onCancel(): void {
    this.router.navigate(['/admin/produits']);
  }

  onSubmit(){
    const formValues = this.form.value;
    console.log(formValues);
    let updatedProduct: Product = {
      id: this.produit.id,
      name: formValues['name'],
      price: formValues['price'],
      stock: formValues['stock'],
      category: formValues['category'],
      image: formValues['image']
    }
    this.produitService.updateProduit(updatedProduct);
    this.router.navigate(['/admin/products']);
  }
}
