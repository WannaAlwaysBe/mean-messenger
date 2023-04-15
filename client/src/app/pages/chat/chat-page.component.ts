import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {map, withLatestFrom, combineLatest} from 'rxjs';

import {ChatDataService} from '@data-layer/chat';
import {UserDataService} from '@data-layer/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {
  public receiver = combineLatest([
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

  public currentChat$ = this.chatDataService.entities$.pipe(
    withLatestFrom(this.route.url),
    map(([entities, route]) => route[0].path === 'newChat' ? 'newChat' : entities[route[0].path]),
  );

  constructor(
    private route: ActivatedRoute,
    private chatDataService: ChatDataService,
    private userDataService: UserDataService,
  ) {
  }
}
