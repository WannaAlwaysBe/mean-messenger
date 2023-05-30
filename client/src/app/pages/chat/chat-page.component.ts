import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {map, combineLatest, Subscription, filter} from 'rxjs';

import {ChatDataService} from '@data-layer/chat';
import {UserDataService} from '@data-layer/user';
import {MessageDataService} from "@data-layer/message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  public currentUser$ = this.userDataService.current$;

  public receiver$ = combineLatest([
    this.route.url,
    this.chatDataService.entities$,
    this.userDataService.entities$
  ]).pipe(
    map(([urlArray, chatDictionary, userDictionary]) => {
      if(!urlArray?.length) {
        return null;
      }

      return urlArray[0].path === 'newChat' ?
        userDictionary[urlArray[1].path] :
        chatDictionary[urlArray[0].path]?.receiver;
    }),
  );

  public currentChat$ = combineLatest([
    this.route.url,
    this.chatDataService.entities$
  ]).pipe(
    map(([route, entities]) => route[0].path === 'newChat' ? 'newChat' : entities[route[0].path]),
  );

  constructor(
    private route: ActivatedRoute,
    private chatDataService: ChatDataService,
    private userDataService: UserDataService,
    private messageDataService: MessageDataService,
  ) {
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.currentChat$.pipe(
        filter(currentChat => !!currentChat)
      ).subscribe(currentChat => {
        if (typeof currentChat !== 'string') {
          this.messageDataService.getAll(currentChat?.id);
        } else {
          this.messageDataService.clear();
        }
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
