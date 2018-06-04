import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTabOneComponent } from './flight-tab-one.component';

describe('FlightTabOneComponent', () => {
  let component: FlightTabOneComponent;
  let fixture: ComponentFixture<FlightTabOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTabOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
