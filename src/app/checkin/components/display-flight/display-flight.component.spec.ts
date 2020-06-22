import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlightComponent } from './display-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('DisplayFlightComponent', () => {
  let component: DisplayFlightComponent;
  let fixture: ComponentFixture<DisplayFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ DisplayFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call AddAddress of chechout add', function() {
    let flight={
      passengers:[]
          };
     component.ngOnInit();
   });


   it('should call AddAddress of chechout filter', function() {
    let flight={
      passengers:[]
          };

        let totalSeat:string[];
      let allPassenger=[{seatno:String}]
      let data1:string;
      let data2:string;
      let editable:any;
     component.applyFilter(data1,data2);
   });

   it('should call AddAddress of chechout add', function() {
    let flight={
      passengers:[]
          };

        let totalSeat:string[];
      let allPassenger=[{seatno:String}]
      let data1:string;
      let data2:any;
      let editable:any;
     component.getPassenger(data2);
   });

   it('should call AddAddress of chechout add', function() {
    let flight={
      passengers:[]
          };

        let totalSeat:string[];
      let allPassenger=[{seatno:String}]
      let data1:string;
      let data2:any;
      let editable:any;
     component.getSelected(data2);
   });



});
