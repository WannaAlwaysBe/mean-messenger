import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NbCardModule, NbLayoutModule } from '@nebular/theme';

import { LoginModule } from '@features/login';
import { SignupModule } from '@features/signup';
import { MessagesListModule } from '@features/messages-list';
import { ChatsListModule } from '@features/cats-list';

import { AppCommonModule } from '@common';

import { MainPageComponent } from './main/main-page.component';
import { ChatPageComponent } from './chat/chat-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { SignupPageComponent } from './signup/signup-page.component';

@NgModule({
  declarations: [MainPageComponent, ChatPageComponent, LoginPageComponent, SignupPageComponent],
  exports: [MainPageComponent],
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
    ChatsListModule,
  ]
})
export class PagesModule { }
