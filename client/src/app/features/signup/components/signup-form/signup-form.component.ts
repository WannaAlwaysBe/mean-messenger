import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {SignupFormBuilderServiceService} from "../../services/signup.form-builder.service.service";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SignupFormBuilderServiceService],
})
export class SignupFormComponent {
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

  public form = this.signupFormBuilderService.getForm();

  constructor(
    private signupFormBuilderService: SignupFormBuilderServiceService,
  ) {
  }

  public submit(form: FormGroup) {
    console.log(form);
  }
}
