import { Component, OnInit } from '@angular/core';

import { UserDataService } from '@data-layer/user';

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(
    private userDataService: UserDataService,
  ) {
  }

  public ngOnInit(): void {
    this.userDataService.loadCurrent();
  }
}
