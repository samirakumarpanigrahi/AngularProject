import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlightComponent } from './display-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { CheckinService } from '../../checkin.service';
import { Passenger } from 'src/app/core/_models/passenger';
import { Flight } from 'src/app/core/_models/flight';
describe('DisplayFlightComponent', () => {
  let component: DisplayFlightComponent;
  let fixture: ComponentFixture<DisplayFlightComponent>;
  let dataService: CheckinService;
  let flight: Flight;
  let passengers: Passenger[];



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DisplayFlightComponent]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFlightComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(CheckinService);
    flight = {
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
    }

    passengers = flight.passengers;
    let spy = spyOn(dataService, 'getSelectedFlight')
      .and.returnValue(flight);
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call service', async(() => {
    console.log(flight);
    fixture.whenStable().then(() => {
      expect(component.flight.planeno).toBe(flight.planeno)
    })
  }))


  it('should call AddAddress of chechout add', function () {
    let flight = {
      passengers: []
    };
    component.ngOnInit();
  });


  it('should call applyFilter', function () {
    let data1 = "passport";
    let data2 = "";
    component.applyFilter(data1, data2);
    expect(component.filterValues[data1]).toBe(data2)

  });

  it('should call getPassenger', function () {
    let spy = spyOn(dataService, 'SelectedPassenger');
    component.getPassenger(passengers[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('should call getSelected', function () {
    let flight = {
      passengers: []
    };
    let data2: any;
    let editable: any;
    component.getSelected(data2);
  });



});
