import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDetailComponent } from './date-detail.component';

describe('DateDetailComponent', () => {
  let component: DateDetailComponent;
  let fixture: ComponentFixture<DateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
