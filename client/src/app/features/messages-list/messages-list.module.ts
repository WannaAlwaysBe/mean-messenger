import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbChatModule } from '@nebular/theme';

import { MessagesListComponent } from './components/messages-list.component';
import {AppCommonModule} from "@common";

@NgModule({
  declarations: [MessagesListComponent],
  exports: [MessagesListComponent],
    imports: [
        CommonModule,
        NbChatModule,
        AppCommonModule
    ]
})
export class MessagesListModule { }
