import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {AuthRestService, LoginData} from '@data-layer/auth';

import {LoginFormBuilderService} from '../../services/login.form-builder.service';
import {LocalStorageService} from "@common";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFormBuilderService],
})
export class LoginFormComponent {
  public get phoneControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public form = this.loginFormBuilderService.getForm();

  constructor(
    private authRestService: AuthRestService,
    private localStorageService: LocalStorageService,
    private loginFormBuilderService: LoginFormBuilderService,
  ) {
  }

  public submit(form: FormGroup): void {
    const formValue: LoginData = form.value;
    const isValid = form.valid;

    if (isValid) {
      this.authRestService.login(formValue).subscribe((res) => {
        this.localStorageService.setData('auth', res.token);
      });
    }
  }
}
