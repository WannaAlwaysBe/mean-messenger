import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-list-chat',
  templateUrl: './search-list-chat.component.html',
  styleUrls: ['./search-list-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchListChatComponent {
  @Input() public name: string;
  @Input() public lastMessage: string;
  @Input() public hex = '#e8e8e8';
  @Input() public id: string;
}
