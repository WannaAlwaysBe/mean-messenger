import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from '../../common/validators/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public get phoneControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public form = this.fb.group({
    phone: this.fb.control(null, [
      Validators.required,
      this.validatorsService.phoneNumberValidator(),
    ]),
    password: this.fb.control(null, [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
  ) {
  }

  public submit(form: FormGroup) {
    console.log(form);
  }
}
