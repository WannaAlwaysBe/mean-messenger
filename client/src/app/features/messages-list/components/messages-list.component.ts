import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {map, take} from "rxjs";

import {Chat, ChatDataService} from '@data-layer/chat';
import {User} from '@data-layer/user';
import {ChatActionsService} from "@data-layer/chat";
import {MessageDataService} from "@data-layer/message";
import {Router} from "@angular/router";
import {EncryptionService} from "@common";

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
    private encryptionService: EncryptionService,
    private router: Router,
  ) {
  }

  public sendMessage(event: {message: string, files: any[]}, sender: User, receiver: User, currentChat: Chat | string) {
    const encryptedMsg = this.encryptionService.encrypt(event.message);

    if (currentChat === 'newChat') {
      this.chatDataService.create({receiver: receiver.id});
      this.chatActionsService.createSuccess$.pipe(take(1)).subscribe(({chat}) => {

      this.router.navigate([`/home/${chat.id}`]).then(() => {
        this.messageDataService.send({
          sender: sender.id,
          chat: chat.id,
          text: encryptedMsg,
          receiver: receiver.id,
        });
      });
      });
    } else {
      this.messageDataService.send({
        sender: sender.id,
        chat: (currentChat as Chat).id,
        text: encryptedMsg,
        receiver: receiver.id,
      });
    }
  }

  public getChatTitle(receiver: User, currentChat: 'newChat' | Chat): string {
    if (currentChat === 'newChat') {
      return `New chat with ${receiver?.username}`;
    }
    return `Chat with ${receiver?.username}`;
  }
}
