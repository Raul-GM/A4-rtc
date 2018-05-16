import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDatesComponent } from './list-of-dates.component';

describe('ListOfDatesComponent', () => {
  let component: ListOfDatesComponent;
  let fixture: ComponentFixture<ListOfDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
