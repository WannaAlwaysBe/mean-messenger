import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRestModule } from '../rest/auth-rest.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRestModule,
  ]
})
export class AuthDataModule { }
