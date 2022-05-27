import { TestBed } from '@angular/core/testing';

import { ProductDBService } from './productDB.service';

describe('ProductDBService', () => {
  let service: ProductDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
