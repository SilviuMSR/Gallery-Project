import { TestBed } from '@angular/core/testing';

import { PhotoPublicService } from './photo-public.service';

describe('PhotoPublicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoPublicService = TestBed.get(PhotoPublicService);
    expect(service).toBeTruthy();
  });
});
