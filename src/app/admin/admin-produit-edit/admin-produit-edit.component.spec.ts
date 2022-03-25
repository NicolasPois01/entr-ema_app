import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProduitEditComponent } from './admin-produit-edit.component';

describe('AdminStockComponent', () => {
  let component: AdminProduitEditComponent;
  let fixture: ComponentFixture<AdminProduitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProduitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProduitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
