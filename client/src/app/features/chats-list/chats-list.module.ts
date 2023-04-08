import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { AppCommonModule } from '@common';

import { ChatsSearchComponent } from './componets/search/chats-search.component';
import { ChatsListComponent } from './componets/chats-list.component';
import { ItemComponent } from './componets/item/item.component';

@NgModule({
  declarations: [ChatsSearchComponent, ChatsListComponent, ItemComponent],
  exports: [ChatsListComponent, ChatsSearchComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    AppCommonModule,
  ]
})
export class ChatsListModule { }
