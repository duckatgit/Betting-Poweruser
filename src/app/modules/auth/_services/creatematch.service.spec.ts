import { TestBed } from '@angular/core/testing';

import { CreatematchService } from './creatematch.service';

describe('CreatematchService', () => {
  let service: CreatematchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatematchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
