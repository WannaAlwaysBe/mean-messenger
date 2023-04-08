import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredFormComponent } from './centered-form.component';

describe('CenteredFormComponent', () => {
  let component: CenteredFormComponent;
  let fixture: ComponentFixture<CenteredFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenteredFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
