import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadToRiyadhComponent } from './road-to-riyadh.component';

describe('RoadToRiyadhComponent', () => {
  let component: RoadToRiyadhComponent;
  let fixture: ComponentFixture<RoadToRiyadhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadToRiyadhComponent]
    });
    fixture = TestBed.createComponent(RoadToRiyadhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
