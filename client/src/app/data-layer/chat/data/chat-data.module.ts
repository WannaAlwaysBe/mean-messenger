import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRestModule } from '../rest/chat-rest.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatRestModule,
  ]
})
export class ChatDataModule { }
