import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import {Observable} from 'rxjs';

import {LocalStorageService} from '@common';

import {WebsocketService} from '../services/websocket/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private websocketService: WebsocketService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.localStorageService.getData<string>('token');

    if (token) {
      this.websocketService.setupSocketConnection();
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
