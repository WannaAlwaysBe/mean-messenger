import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ValidatorsService} from '@common';

@Injectable()
export class LoginFormBuilderService {
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
  ) { }

  public getForm(): FormGroup {
    return this.fb.group({
      phone: this.fb.control(null, [
        Validators.required,
        this.validatorsService.phoneNumberValidator(),
      ]),
      password: this.fb.control(null, [Validators.required]),
    });
  }
}
