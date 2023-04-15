import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Chat, ChatDataService} from '@data-layer/chat';
import {User} from '@data-layer/user';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  @Input() public receiver: User = {} as User;
  @Input() public currentChat: 'newChat' | Chat;

  constructor(
    private chatDataService: ChatDataService,
  ) {
  }

  public sendMessage(event: any, receiver: User, currentChat: Chat | string) {
    if (currentChat === 'newChat') {
      this.chatDataService.create({receiver: receiver.id});
    }

    // this.messages.push({
    //   text: event.message,
    //   date: new Date(),
    //   reply: true,
    //   type: 'text',
    //   user: {
    //     name: 'Jonh Doe',
    //     avatar: 'https://i.gifer.com/no.gif',
    //   },
    // });
  }

  public getChatTitle(receiver: User, currentChat: 'newChat' | Chat): string {
    if (currentChat === 'newChat') {
      return `New chat with ${receiver?.username}`;
    }
    return `Chat with ${receiver?.username}`;
  }
}
