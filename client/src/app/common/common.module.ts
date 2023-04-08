import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NbCardModule, NbInputModule, NbLayoutModule} from '@nebular/theme';

import { BodyComponent } from './layout-base/body/body.component';
import { SidebarComponent } from './layout-base/sidebar/sidebar.component';
import { ChatsListModule } from '../features/chats-list/chats-list.module';
import { ControlErrorsComponent } from './control-errors/control-errors.component';
import { CenteredFormComponent } from './centered-form/centered-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormControlComponent } from './form-control/form-control.component';

@NgModule({
  declarations: [
    BodyComponent,
    SidebarComponent,
    ControlErrorsComponent,
    CenteredFormComponent,
    FormControlComponent,
  ],
  exports: [
    BodyComponent,
    SidebarComponent,
    ControlErrorsComponent,
    CenteredFormComponent,
    FormControlComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    ChatsListModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    FormsModule,
  ]
})
export class AppCommonModule { }
