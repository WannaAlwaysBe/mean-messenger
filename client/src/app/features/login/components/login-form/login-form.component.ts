import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {BehaviorSubject} from 'rxjs';

import {LocalStorageService} from '@common';

import {AuthRestService, LoginData} from '@data-layer/auth';

import {LoginFormBuilderService} from '../../services/login.form-builder.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFormBuilderService],
})
export class LoginFormComponent {
  private responseErrorSubject = new BehaviorSubject(null);
  public get phoneControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  public form = this.loginFormBuilderService.getForm();
  public responseError$ = this.responseErrorSubject.asObservable();

  constructor(
    private authRestService: AuthRestService,
    private localStorageService: LocalStorageService,
    private loginFormBuilderService: LoginFormBuilderService,
    private router: Router,
  ) { }

  public submit(form: FormGroup): void {
    const formValue: LoginData = form.value;
    const isValid = form.valid;

    this.responseErrorSubject.next(null);

    if (isValid) {
      this.authRestService.login(formValue).subscribe({
        next: (res) => {
          this.localStorageService.setData('token', res.token);
          this.router.navigate(['home']);
        },
        error: () => {
          this.responseErrorSubject.next('Invalid username or password');
        }
      });
    }
  }
}
