import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExForm1Component } from './ex-form1.component';

describe('ExForm1Component', () => {
  let component: ExForm1Component;
  let fixture: ComponentFixture<ExForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExForm1Component]
    });
    fixture = TestBed.createComponent(ExForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
