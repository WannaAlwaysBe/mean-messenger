import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NbCardModule, NbInputModule, NbLayoutModule, NbSpinnerModule} from '@nebular/theme';

import { BodyComponent } from './layout-base/body/body.component';
import { SidebarComponent } from './layout-base/sidebar/sidebar.component';
import { ControlErrorsComponent } from './control-errors/control-errors.component';
import { CenteredFormComponent } from './centered-form/centered-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { LocalStorageService } from './services/local-storage.service';
import { NameIconPipe } from './pipes/name-icon.pipe';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { FilterPipe } from './pipes/filter.pipe';
import { WebsocketService } from './services/websocket/websocket.service';
import { EncryptionService } from './services/encryption.service';
import { DecryptPipe } from './pipes/decrypt.pipe';

@NgModule({
  declarations: [
    BodyComponent,
    SidebarComponent,
    ControlErrorsComponent,
    CenteredFormComponent,
    FormControlComponent,
    NameIconPipe,
    PageLoaderComponent,
    FilterPipe,
    DecryptPipe,
  ],
  exports: [
    BodyComponent,
    SidebarComponent,
    ControlErrorsComponent,
    CenteredFormComponent,
    FormControlComponent,
    NameIconPipe,
    PageLoaderComponent,
    FilterPipe,
    DecryptPipe,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    FormsModule,
    NbSpinnerModule,
  ],
  providers: [LocalStorageService, WebsocketService, EncryptionService],
})
export class AppCommonModule { }
