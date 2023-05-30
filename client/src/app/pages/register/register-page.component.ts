import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {LocalStorageService} from '@common';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
  ) { }
  public ngOnInit(): void {
    this.localStorageService.removeData('token');
  }
}
