import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProduitsComponent } from './admin-produits.component';

describe('AdminProduitsComponent', () => {
  let component: AdminProduitsComponent;
  let fixture: ComponentFixture<AdminProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
