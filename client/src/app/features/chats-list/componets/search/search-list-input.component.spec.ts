import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListInputComponent } from './search-list-input.component';

describe('SearchComponent', () => {
  let component: SearchListInputComponent;
  let fixture: ComponentFixture<SearchListInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchListInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
