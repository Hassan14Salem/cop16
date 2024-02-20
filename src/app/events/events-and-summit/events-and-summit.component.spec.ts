import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAndSummitComponent } from './events-and-summit.component';

describe('EventsAndSummitComponent', () => {
  let component: EventsAndSummitComponent;
  let fixture: ComponentFixture<EventsAndSummitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAndSummitComponent]
    });
    fixture = TestBed.createComponent(EventsAndSummitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
