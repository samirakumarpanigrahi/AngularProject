import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AllFlightComponent } from './all-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrentFlightPipe } from '../current-flight.pipe';
import { InflightService } from '../inflight.service';
import { Flight } from 'src/app/core/_models/flight';
import { of } from 'rxjs';

describe('AllFlightComponent', () => {
  let component: AllFlightComponent;
  let fixture: ComponentFixture<AllFlightComponent>;
  let dataService:InflightService;
  let flight: Flight[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule], 
      declarations: [ AllFlightComponent ,CurrentFlightPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFlightComponent);
    dataService = fixture.debugElement.injector.get(InflightService);
    flight =[ {
      "id": 1,
      "planename": "Indigo",
      "planeno": "6E-2131",
      "departure": "Mon May 25 2020 11:48:22 GMT+0530 (India Standard Time)",
      "departureFrom": "DELHI",
      "arrivalTo": "HYDERABAD",
      "arrival": "Mon May 25 2020 08:48:22 GMT+0530 (India Standard Time)",
      "duration": "02 hrs",
      "price": 2341,
      "ancillaryServices": [
        "ancillary1",
        "ancillary2 ",
        "ancillary3 ",
        "anci4"
      ],
      "specialMeals": [
        "Normal Meal",
        "Special Meal"
      ],
      "shoppingItems": [
        "choclate",
        "lays"
      ],
      "image": "https://images-eu.ssl-images-amazon.com/images/I/418wwCw2HuL.png",
      "passengers": [
        {
          "cId": 13,
          "customername": "samir",
          "checkenin": true,
          "passport": "",
          "address": "Bellagam123",
          "DOB": "1998-06-19T18:30:00.000Z",
          "category": "infants",
          "ancillayService": [
            "ancillary1",
            "ancillary2 ",
            "ancillary3 "
          ],
          "action": "Update",
          "seatno": "2A",
          "meal": "Special Meal",
          "shop": [
            "choclate",
            "lays"
          ]
        }]
    }]
    let spy = spyOn(dataService,'get')
    .and.returnValue(of(flight));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call service', async(() => {
    console.log(flight);
    fixture.whenStable().then(() => {
      expect(component.planes).toBe(flight)
    })
  }));

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
