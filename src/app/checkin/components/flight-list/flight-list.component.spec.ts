import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FlightListComponent } from './flight-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NextFlightPipe } from '../../next-flight.pipe';
import { CheckinService } from '../../checkin.service';
import { of } from 'rxjs';

describe('FlightListComponent', () => {
  let component: FlightListComponent;
  let fixture: ComponentFixture<FlightListComponent>;
let checkinService:CheckinService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule], 
      declarations: [ FlightListComponent ,NextFlightPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightListComponent);
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

        let totalSeat:string[];
      let allPassenger=[{seatno:String}]
      let data1:string;
      let data2:any;
      let editable:any;
     component.selectedFlight(data2);
   });  

});
