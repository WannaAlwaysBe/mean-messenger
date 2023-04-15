import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { combineLatest, map, Observable } from 'rxjs';

import { UserDataService } from '@data-layer/user';
import { ChatDataService } from '@data-layer/chat';

@Injectable({
  providedIn: 'root'
})
export class PreloadResolver implements Resolve<boolean> {
  constructor(
    private userDataService: UserDataService,
    private chatDataService: ChatDataService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.userDataService.loadCurrent();
    this.chatDataService.loadAll();

    return combineLatest([
      this.userDataService.loading$.pipe(map(loadingState => loadingState.loadInProgress)),
      this.userDataService.currentLoading$.pipe(map(loadingState => loadingState.loadInProgress)),
      this.chatDataService.loading$.pipe(map(loadingState => loadingState.loadInProgress)),
    ]).pipe(map(loadingStates => !loadingStates.includes(true)));
  }
}
