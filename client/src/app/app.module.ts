import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppCommonModule } from '@common';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
