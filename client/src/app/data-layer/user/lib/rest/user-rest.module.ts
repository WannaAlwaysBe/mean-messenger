import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRestService } from './services/user-rest.service';

@NgModule({
  providers: [
    UserRestService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class UserRestModule { }
