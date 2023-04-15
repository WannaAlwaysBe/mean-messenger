import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListChatComponent } from './search-list-chat.component';

describe('ItemComponent', () => {
  let component: SearchListChatComponent;
  let fixture: ComponentFixture<SearchListChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchListChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
