import { TestBed } from '@angular/core/testing';

import { UserObjectService } from './user-object.service';

describe('UserObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserObjectService = TestBed.get(UserObjectService);
    expect(service).toBeTruthy();
  });
});
