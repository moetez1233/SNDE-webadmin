import { TestBed } from '@angular/core/testing';

import { AddReleveurService } from './add-releveur.service';

describe('AddReleveurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddReleveurService = TestBed.get(AddReleveurService);
    expect(service).toBeTruthy();
  });
});
