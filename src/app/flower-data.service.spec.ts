import { TestBed } from '@angular/core/testing';

import { FlowerDataService } from './flower-data.service';

describe('FlowerDataService', () => {
  let service: FlowerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
