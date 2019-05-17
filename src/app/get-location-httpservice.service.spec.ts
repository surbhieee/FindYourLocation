import { TestBed } from '@angular/core/testing';

import { GetLocationHTTPServiceService } from './get-location-httpservice.service';

describe('GetLocationHTTPServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLocationHTTPServiceService = TestBed.get(GetLocationHTTPServiceService);
    expect(service).toBeTruthy();
  });
});
