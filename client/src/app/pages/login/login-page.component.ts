import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {LocalStorageService} from '@common';
import {WebsocketService} from "../../common/services/websocket/websocket.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private websocketService: WebsocketService,
  ) { }
  public ngOnInit(): void {
    this.localStorageService.removeData('token');
    this.websocketService.disconnect();
  }
}
