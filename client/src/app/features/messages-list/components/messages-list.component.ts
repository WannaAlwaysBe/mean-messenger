import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {map, take} from "rxjs";

import {Chat, ChatDataService} from '@data-layer/chat';
import {User} from '@data-layer/user';
import {ChatActionsService} from "@data-layer/chat";
import {MessageDataService} from "@data-layer/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  @Input() public receiver: User = {} as User;
  @Input() public currentChat: 'newChat' | Chat;
  @Input() public currentUser: User = {} as User;

  public messages$ = this.messageDataService.list$.pipe(
    map(messages => messages.map(message => ({
      ...message,
      timestamp: new Date(message.timestamp),
    })))
  );

  constructor(
    private chatDataService: ChatDataService,
    private chatActionsService: ChatActionsService,
    public messageDataService: MessageDataService,
    private router: Router,
  ) {
  }

  public sendMessage(event: {message: string, files: any[]}, sender: User, receiver: User, currentChat: Chat | string) {
    if (currentChat === 'newChat') {
      this.chatDataService.create({receiver: receiver.id});
      this.chatActionsService.createSuccess$.pipe(take(1)).subscribe(({chat}) => {

      this.router.navigate([`/home/${chat.id}`]).then(() => {
        this.messageDataService.send({
          sender: sender.id,
          chat: chat.id,
          text: event.message,
        });
      });
      });
    } else {
      this.messageDataService.send({
        sender: sender.id,
        chat: (currentChat as Chat).id,
        text: event.message,
      });
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
