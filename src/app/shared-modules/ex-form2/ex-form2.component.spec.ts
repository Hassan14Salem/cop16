import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExForm2Component } from './ex-form2.component';

describe('ExForm2Component', () => {
  let component: ExForm2Component;
  let fixture: ComponentFixture<ExForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExForm2Component]
    });
    fixture = TestBed.createComponent(ExForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
