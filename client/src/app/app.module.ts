import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {NbLayoutModule, NbSpinnerModule, NbThemeModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppCommonModule, AuthInterceptor } from '@common';
import { BaseUrlInterceptor } from '@common';

import { UserDataModule } from '@data-layer/user';
import { ChatDataModule } from '@data-layer/chat';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCommonModule,
    PagesModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbEvaIconsModule,
    NbLayoutModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    UserDataModule,
    ChatDataModule,
    NbSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
