import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

import {debounceTime, distinctUntilChanged, filter, fromEvent, tap} from 'rxjs';

@Component({
  selector: 'app-search-list-input',
  templateUrl: './search-list-input.component.html',
  styleUrls: ['./search-list-input.component.scss']
})
export class SearchListInputComponent implements AfterViewInit {
  @Output() public onSearch = new EventEmitter<string>();
  @ViewChild('input') input: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.onSearch.emit(this.input.nativeElement.value);
        })
      )
      .subscribe();
  }
}
