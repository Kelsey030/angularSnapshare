import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage2Component } from './homepage2.component';

describe('Homepage2Component', () => {
  let component: Homepage2Component;
  let fixture: ComponentFixture<Homepage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homepage2Component]
    });
    fixture = TestBed.createComponent(Homepage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
