import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Chat} from '@data-layer/chat';

@Component({
  selector: 'app-search-list-user',
  templateUrl: './search-list-user.component.html',
  styleUrls: ['./search-list-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchListUserComponent {
  @Input() public name: string;
  @Input() public hex = '#e8e8e8';
  @Input() public id: string;
  @Input() public chatList: Chat[] = [];

  public getChatLink(chatList: Chat[], id: string): string {
    const existingChatWithUser = chatList.find(chat => chat.users.some(user => user.id === id));

    return existingChatWithUser ? existingChatWithUser.id : `newChat/${id}`;
  }
}
