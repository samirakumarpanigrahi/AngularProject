import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AllFlightComponent } from './all-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrentFlightPipe } from '../current-flight.pipe';

describe('AllFlightComponent', () => {
  let component: AllFlightComponent;
  let fixture: ComponentFixture<AllFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule], 
      declarations: [ AllFlightComponent ,CurrentFlightPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFlightComponent);
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
      // let isCheckIn:Boolean;
     component.selectedFlight(data2);
   });
});
