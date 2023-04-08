import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public equalityValidator(passwordKey: string = 'password', confirmPasswordKey: string = 'confirmPassword'): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      if (!control.value[confirmPasswordKey]) {
        return null;
      }

      return control.value[passwordKey] === control.value[confirmPasswordKey] ? null : {equality: true};
    };
  }

  public passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      return control
        .value
        .match('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})') ?
        null : {passwordStrength: true};
    };
  }

  public usernameValidator(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      return control
        .value
        .match('^([a-zA-Z0-9_-]){3,10}$') ?
        null : {username: true};
    };
  }

  public phoneNumberValidator(): ValidatorFn {
    return Validators.pattern('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$');
  }
}
