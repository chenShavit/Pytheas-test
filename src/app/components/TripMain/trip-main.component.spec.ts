import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMainPage } from './trip-main.page';

describe('TripMainPage', () => {
  let component: TripMainPage;
  let fixture: ComponentFixture<TripMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
