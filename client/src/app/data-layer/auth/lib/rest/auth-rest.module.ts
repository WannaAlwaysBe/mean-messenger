import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRestService } from './services/auth-rest.service';

@NgModule({
  providers: [AuthRestService],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class AuthRestModule { }
