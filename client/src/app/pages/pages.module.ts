import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import {NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule} from '@nebular/theme';

import { MainComponent } from './main/main.component';
import { AppCommonModule } from '../common/common.module';
import { ChatComponent } from './chat/chat.component';
import { MessagesListModule } from '../features/messages-list/messages-list.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [MainComponent, ChatComponent, LoginComponent, SignupComponent],
  exports: [MainComponent],
	imports: [
		CommonModule,
		AppCommonModule,
		NbCardModule,
		RouterOutlet,
		MessagesListModule,
		NbInputModule,
		NbButtonModule,
		ReactiveFormsModule,
		NbLayoutModule,
	]
})
export class PagesModule { }
