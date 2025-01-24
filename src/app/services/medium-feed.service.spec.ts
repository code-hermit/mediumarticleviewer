import { TestBed } from '@angular/core/testing';

import { MediumFeedService } from './medium-feed.service';

describe('MediumFeedService', () => {
  let service: MediumFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediumFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
