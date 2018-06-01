import { TestBed, inject } from '@angular/core/testing';

import { NonSingletonService } from './non-singleton.service';

describe('NonSingletonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonSingletonService]
    });
  });

  it('should be created', inject([NonSingletonService], (service: NonSingletonService) => {
    expect(service).toBeTruthy();
  }));
});
