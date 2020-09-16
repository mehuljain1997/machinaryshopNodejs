import { TestBed } from '@angular/core/testing';

import { RegistershopService } from './registershop.service';

describe('RegistershopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistershopService = TestBed.get(RegistershopService);
    expect(service).toBeTruthy();
  });
});
