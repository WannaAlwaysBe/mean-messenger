import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NbCardModule, NbInputModule, NbLayoutModule} from '@nebular/theme';

import { BodyComponent } from './layout-base/body/body.component';
import { SidebarComponent } from './layout-base/sidebar/sidebar.component';
import { ControlErrorsComponent } from './control-errors/control-errors.component';
import { CenteredFormComponent } from './centered-form/centered-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { LocalStorageService } from './services/local-storage.service';
import { NameIconPipe } from './pipes/name-icon.pipe';

@NgModule({
  declarations: [
    BodyComponent,
    SidebarComponent,
    ControlErrorsComponent,
    CenteredFormComponent,
    FormControlComponent,
    NameIconPipe,
  ],
  exports: [
    BodyComponent,
    SidebarComponent,
    ControlErrorsComponent,
    CenteredFormComponent,
    FormControlComponent,
    NameIconPipe,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    FormsModule,
  ],
  providers: [LocalStorageService],
})
export class AppCommonModule { }
