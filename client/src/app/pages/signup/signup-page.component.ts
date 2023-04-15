import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {LocalStorageService} from '@common';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
  ) { }
  public ngOnInit(): void {
    this.localStorageService.removeData('token');
  }
}
