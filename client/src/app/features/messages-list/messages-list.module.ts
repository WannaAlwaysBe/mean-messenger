import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbChatModule } from '@nebular/theme';

import { MessagesListComponent } from './components/messages-list.component';

@NgModule({
  declarations: [MessagesListComponent],
  exports: [MessagesListComponent],
	imports: [
		CommonModule,
		NbChatModule
	]
})
export class MessagesListModule { }
