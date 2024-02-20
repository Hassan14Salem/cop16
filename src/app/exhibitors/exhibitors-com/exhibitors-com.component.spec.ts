import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorsComComponent } from './exhibitors-com.component';

describe('ExhibitorsComComponent', () => {
  let component: ExhibitorsComComponent;
  let fixture: ComponentFixture<ExhibitorsComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhibitorsComComponent]
    });
    fixture = TestBed.createComponent(ExhibitorsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
