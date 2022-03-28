import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsEditStockComponent } from './admin-products-edit-stock.component';

describe('AdminProductsEditStockComponent', () => {
  let component: AdminProductsEditStockComponent;
  let fixture: ComponentFixture<AdminProductsEditStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductsEditStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsEditStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
