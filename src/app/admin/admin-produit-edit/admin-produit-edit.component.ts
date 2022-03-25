import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/modals/produit.modal';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-admin-produit-edit',
  templateUrl: './admin-produit-edit.component.html',
  styleUrls: ['./admin-produit-edit.component.scss']
})
export class AdminProduitEditComponent implements OnInit {

  produit!: Produit;

  form!: FormGroup

  constructor(private produitService: ProduitService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.produit = this.produitService.getProduitById(+this.route.snapshot.params['id']);
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      nom: this.produit.nom,
      prix: this.produit.prix,
      stock: this.produit.stock,
      categorie: this.produit.categorie,
      image: this.produit.image
    });
  }

  onCancel(): void {
    this.router.navigate(['/admin/produits']);
  }

  onSubmit(){
    const formValues = this.form.value;
    console.log(formValues);
    let updatedProduct: Produit = {
      id: this.produit.id,
      nom: formValues['nom'],
      prix: formValues['prix'],
      stock: formValues['stock'],
      categorie: formValues['categorie'],
      image: formValues['image']
    }
    this.produitService.updateProduit(updatedProduct);
  }
}
