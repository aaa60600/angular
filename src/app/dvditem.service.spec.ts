import { TestBed } from '@angular/core/testing';

import { DvditemService } from './dvditem.service';

describe('DvditemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DvditemService = TestBed.get(DvditemService);
    expect(service).toBeTruthy();
  });
});
