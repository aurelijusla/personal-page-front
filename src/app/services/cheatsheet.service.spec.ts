import { TestBed } from '@angular/core/testing';

import { CheatsheetService } from './cheatsheet.service';

describe('CheatsheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheatsheetService = TestBed.get(CheatsheetService);
    expect(service).toBeTruthy();
  });
});
