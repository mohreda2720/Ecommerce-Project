/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreditandidComponent } from './creditandid.component';

describe('CreditandidComponent', () => {
  let component: CreditandidComponent;
  let fixture: ComponentFixture<CreditandidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditandidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditandidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
