import { TestBed } from '@angular/core/testing';

import { ShopDetailService } from './shop-detail.service';

describe('ShopDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopDetailService = TestBed.get(ShopDetailService);
    expect(service).toBeTruthy();
  });
});
