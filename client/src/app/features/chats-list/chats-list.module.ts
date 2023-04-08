import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { SearchComponent } from './componets/search/search.component';
import { ChatsListComponent } from './componets/chats-list.component';
import { ItemComponent } from './componets/item/item.component';
import { NameIconPipe } from './pipes/name-icon.pipe';

@NgModule({
  declarations: [SearchComponent, ChatsListComponent, ItemComponent, NameIconPipe],
  exports: [ChatsListComponent, NameIconPipe, SearchComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule
  ]
})
export class ChatsListModule { }
