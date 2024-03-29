import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbButtonModule } from '@nebular/theme';

import { AppCommonModule } from '@common';

import { AuthRestModule } from '@data-layer/auth';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserDataService } from '@data-layer/user';
import {RouterLink} from "@angular/router";

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
        RouterLink,
    ],
  providers: [
    UserDataService,
  ]
})
export class LoginModule { }
