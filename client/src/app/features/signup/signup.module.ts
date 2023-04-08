import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbButtonModule } from '@nebular/theme';

import { AppCommonModule } from '@common';

import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    SignupFormComponent
  ],
  exports: [
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppCommonModule,
    NbButtonModule
  ]
})
export class SignupModule { }
