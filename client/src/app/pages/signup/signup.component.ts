import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from '../../common/validators/validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  public get phoneControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  public get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public get confirmPasswordControl(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }

  public form = this.fb.group({
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

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
  ) {
  }

  public submit(form: FormGroup) {
    console.log(form);
  }
}
