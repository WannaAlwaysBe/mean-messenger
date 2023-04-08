import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { UserRestService } from './services/user-rest.service';
import { BaseUrlInterceptor } from '../../../../common/interceptors/base-url.interceptor';

@NgModule({
  providers: [
    UserRestService,
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class UserRestModule { }
