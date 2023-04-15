import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {User, UserDataService} from '@data-layer/user';
import {Chat} from '@data-layer/chat';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchListComponent {
  @Input() userList: User[] = [];
  @Input() chatList: Chat[] = [];

  public searchText = null;

  constructor(
    private userDataService: UserDataService,
  ) {
  }

  public onSearch(searchText: string): void {
    this.searchText = searchText;

    if (searchText) {
      this.userDataService.loadAll(searchText);
    }
  }
}
