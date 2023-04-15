import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChatRestService } from './services/chat-rest.service';

@NgModule({
  providers: [
    ChatRestService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class ChatRestModule { }
