import { TestBed } from '@angular/core/testing';

import { MatchService } from './creatematch.service';

describe('CreatematchService', () => {
  let service: MatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
