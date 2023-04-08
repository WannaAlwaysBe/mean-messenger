import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbButtonModule } from '@nebular/theme';

import { AppCommonModule } from '@common';

import { AuthRestModule } from '@data-layer/auth';

import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  exports: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppCommonModule,
    NbButtonModule,
    AuthRestModule,
  ]
})
export class LoginModule { }
