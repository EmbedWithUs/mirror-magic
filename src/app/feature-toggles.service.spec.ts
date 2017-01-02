/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeatureTogglesService } from './feature-toggles.service';

describe('FeatureTogglesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureTogglesService]
    });
  });

  it('should ...', inject([FeatureTogglesService], (service: FeatureTogglesService) => {
    expect(service).toBeTruthy();
  }));
});
