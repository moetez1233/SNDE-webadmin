import { TestBed } from '@angular/core/testing';

import { ReleveurService } from './releveur.service';

describe('ReleveurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReleveurService = TestBed.get(ReleveurService);
    expect(service).toBeTruthy();
  });
});
