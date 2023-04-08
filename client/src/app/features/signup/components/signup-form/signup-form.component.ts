import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {BehaviorSubject} from 'rxjs';

import {AuthRestService, RegisterData} from '@data-layer/auth';

import {LocalStorageService} from '@common';

import {SignupFormBuilderServiceService} from '../../services/signup.form-builder.service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SignupFormBuilderServiceService],
})
export class SignupFormComponent {
  private responseErrorSubject = new BehaviorSubject(null);

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
  public responseError$ = this.responseErrorSubject.asObservable();

  constructor(
    private signupFormBuilderService: SignupFormBuilderServiceService,
    private authRestService: AuthRestService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
  }

  public submit(form: FormGroup): void {
    const formValue: RegisterData = form.value;
    const isValid = form.valid;

    this.responseErrorSubject.next(null);

    if (isValid) {
      this.authRestService.register(formValue).subscribe({
        next: (res) => {
          this.localStorageService.setData('token', res.token);
          this.router.navigate(['home']);
        },
        error: () => {
          this.responseErrorSubject.next('User already exists');
        }
      });
    }
  }
}
