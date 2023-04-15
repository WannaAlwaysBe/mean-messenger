import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {UserDataService} from '@data-layer/user';
import {ChatDataService} from '@data-layer/chat';

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public loadInProgress = true;

  constructor(
    private router: Router,
    public userDataService: UserDataService,
    public chatDataService: ChatDataService,
  ) { }

  public ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      const routerEvent = (event as any)?.routerEvent;

      if (routerEvent instanceof NavigationStart) {
        this.loadInProgress = true;
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
        setTimeout(() => {
          this.loadInProgress = false;
        }, 1000);
      }
    });
  }
}
