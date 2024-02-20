import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiArabiaEffortsComponent } from './saudi-arabia-efforts.component';

describe('SaudiArabiaEffortsComponent', () => {
  let component: SaudiArabiaEffortsComponent;
  let fixture: ComponentFixture<SaudiArabiaEffortsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaudiArabiaEffortsComponent]
    });
    fixture = TestBed.createComponent(SaudiArabiaEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
