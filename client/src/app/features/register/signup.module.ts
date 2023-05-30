import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbButtonModule } from '@nebular/theme';

import { AppCommonModule } from '@common';

import { RegisterFormComponent } from './components/register-form/register-form.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  exports: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppCommonModule,
    NbButtonModule,
    RouterLink
  ]
})
export class SignupModule { }
