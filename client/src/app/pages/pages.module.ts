import { NgModule } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbCardModule, NbLayoutModule } from '@nebular/theme';

import { LoginModule } from '@features/login';
import { SignupModule } from '@features/register';
import { MessagesListModule } from '@features/messages-list';
import { SearchListModule } from '@features/search-list';

import { AppCommonModule } from '@common';

import { HomePageComponent } from './home/home-page.component';
import { ChatPageComponent } from './chat/chat-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { RegisterPageComponent } from './register/register-page.component';

@NgModule({
  declarations: [HomePageComponent, ChatPageComponent, LoginPageComponent, RegisterPageComponent],
  exports: [HomePageComponent],
	imports: [
		CommonModule,
		AppCommonModule,
		NbCardModule,
		RouterOutlet,
		MessagesListModule,
		ReactiveFormsModule,
		NbLayoutModule,
		LoginModule,
		SignupModule,
		SearchListModule,
		RouterLink,
	]
})
export class PagesModule { }
