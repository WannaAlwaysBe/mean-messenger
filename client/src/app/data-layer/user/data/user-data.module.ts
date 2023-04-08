import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRestModule } from '../rest/user-rest.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRestModule,
  ]
})
export class UserDataModule { }
