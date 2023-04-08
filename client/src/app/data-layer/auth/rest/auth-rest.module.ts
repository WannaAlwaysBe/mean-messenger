import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRestService } from './services/auth-rest.service';

@NgModule({
  providers: [AuthRestService],
  imports: [
    CommonModule
  ]
})
export class AuthRestModule { }
