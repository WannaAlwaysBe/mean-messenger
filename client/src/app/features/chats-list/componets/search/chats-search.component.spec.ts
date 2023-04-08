import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsSearchComponent } from './chats-search.component';

describe('SearchComponent', () => {
  let component: ChatsSearchComponent;
  let fixture: ComponentFixture<ChatsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
