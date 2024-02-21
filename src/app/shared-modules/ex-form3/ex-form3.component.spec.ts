import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExForm3Component } from './ex-form3.component';

describe('ExForm3Component', () => {
  let component: ExForm3Component;
  let fixture: ComponentFixture<ExForm3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExForm3Component]
    });
    fixture = TestBed.createComponent(ExForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
