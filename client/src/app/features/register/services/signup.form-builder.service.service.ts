import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ValidatorsService} from '@common';

@Injectable({
  providedIn: 'root'
})
export class SignupFormBuilderServiceService {
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
      username: this.fb.control(null, [
        Validators.required,
        this.validatorsService.usernameValidator(),
      ]),
      password: this.fb.control(null, [
        Validators.required,
        this.validatorsService.passwordStrengthValidator()
      ]),
      confirmPassword: this.fb.control(null, [
        Validators.required,
      ]),
    }, {validators: [this.validatorsService.equalityValidator()]});
  }
}
