import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerDetailComponent } from './passenger-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CheckinService } from '../../checkin.service';
import { AnyARecord } from 'dns';
import { Passenger } from 'src/app/core/_models/passenger';
import { Flight } from 'src/app/core/_models/flight';
import { of } from 'rxjs';

describe('PassengerDetailComponent', () => {
  let component: PassengerDetailComponent;
  let fixture: ComponentFixture<PassengerDetailComponent>;
  let dataService: CheckinService;

  let passengers: Passenger[];

  let flight: Flight;
  let spy2: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],

      declarations: [PassengerDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetailComponent);
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
    let spy = spyOn(dataService, 'getSelectedPassenger')
      .and.returnValue(passengers[0]);
    let spy1 = spyOn(dataService, 'getSelectedFlight')
      .and.returnValue(flight);
    spy2 = spyOn(dataService, 'update')
      .and.returnValue(of(flight));
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should call service', async(() => {
    fixture.whenStable().then(() => {
      expect(component.flight.planeno).toBe(flight.planeno)
    })
  }))



  it('should call service', async(() => {
    fixture.whenStable().then(() => {
      expect(component.passenger.customername).toBe(passengers[0].customername)
    })
  }))


  it('should call updateTable', async(() => {
    fixture.whenStable().then(() => {
      expect(component.passenger.customername).toBe(passengers[0].customername)
    })
    component.updateTable();
    expect(spy2).toHaveBeenCalled();
  }));


  it('should call findIndex', function () {
    component.flight = flight;
    component.findIndex(passengers, "samir", 13);
    expect(component.findIndex(passengers, "samir", 13)).toBe(0);
  });


  it('should call countBookedSeat', function () {
    component.countBookedSeat();
  });


  it('should call checkSeat', function () {
    component.isChangeSeat = true;
    component.checkSeat();
    expect(component.isChangeSeat).toBe(false);
  });


  it('should call changeCancel', function () {
    component.isChangeSeat = true;
    component.changeCancel();
    expect(component.isChangeSeat).toBe(false);
  });



  it('should call getSelected', function () {
    let data2: any;
    component.getSelected(data2);
  });


  it('should call getTrial true', function () {
    component.passenger = passengers[0];
    let data2 = ["2A"];
    component.getTrial(data2);
    expect(component.isCheckIn).toBe(true);
  });


  it('should call getTrial flase', function () {
    component.passenger = passengers[0];
    let data2 = [];
    component.getTrial(data2);
    expect(component.isCheckIn).toBe(false);
  });


  it('should call check of chechout add', function () {
    component.check(passengers);
  });


  it('should call check of chechout add', function () {
    component.checkIn();
  });


  it('should call changeSeat', function () {
    component.isChangeSeat = true;
    component.changeSeat();
    expect(component.isChangeSeat).toBe(false);
  });





});
