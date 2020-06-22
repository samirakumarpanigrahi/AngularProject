import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatLayOutComponent } from './seat-lay-out.component';

describe('SeatLayOutComponent', () => {
  let component: SeatLayOutComponent;
  let fixture: ComponentFixture<SeatLayOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatLayOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
