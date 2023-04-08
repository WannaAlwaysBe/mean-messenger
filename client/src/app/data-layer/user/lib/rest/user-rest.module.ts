import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRestService } from './services/user-rest.service';

@NgModule({
  providers: [UserRestService],
  imports: [
    CommonModule
  ]
})
export class UserRestModule { }
