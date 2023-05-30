import { TestBed } from '@angular/core/testing';

import { SignupFormBuilderServiceService } from './signup.form-builder.service.service';

describe('SignupFormBuilderServiceService', () => {
  let service: SignupFormBuilderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupFormBuilderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
