/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComponent4Component } from './my-component4.component';

describe('MyComponent4Component', () => {
  let component: MyComponent4Component;
  let fixture: ComponentFixture<MyComponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
