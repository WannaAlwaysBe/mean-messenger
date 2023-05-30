import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

import { NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { AppCommonModule } from '@common';

import { SearchListInputComponent } from './componets/search/search-list-input.component';
import { SearchListComponent } from './componets/search-list.component';
import { SearchListChatComponent } from './componets/chat/search-list-chat.component';
import { SearchListUserComponent } from './componets/user/search-list-user.component';

@NgModule({
  declarations: [SearchListInputComponent, SearchListComponent, SearchListChatComponent, SearchListUserComponent],
  exports: [SearchListComponent, SearchListInputComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    AppCommonModule,
    RouterLink,
    RouterLinkActive,
  ]
})
export class SearchListModule { }
