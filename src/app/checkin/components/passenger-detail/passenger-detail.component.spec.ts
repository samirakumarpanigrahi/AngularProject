import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerDetailComponent } from './passenger-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CheckinService } from '../../checkin.service';
import { AnyARecord } from 'dns';
import { Passenger } from 'src/app/core/_models/passenger';
import { Flight } from 'src/app/core/_models/flight';

describe('PassengerDetailComponent', () => {
  let component: PassengerDetailComponent;
  let fixture: ComponentFixture<PassengerDetailComponent>;
  let testService:CheckinService;
  let checkpassenger:Passenger[];
  let allPassenger:Passenger[];
  let passengers:Passenger[];
  
  let flight:Flight;
  let totalSeat:string[];
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
   flight={
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
      }]}
      passengers=flight.passengers;
      allPassenger=flight.passengers;
      totalSeat=["5D","6F"]
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(flight);
    
    expect(component).toBeTruthy();
  });


  // it('should call the GetAddressList of checkout service', function() {
   
  //   spyOn(testService, 'getSelectedPassenger').and.callThrough();
  //   // testAdminService.GetRequestedList();
  //   component.ngOnInit();
  //   expect(testService.getSelectedPassenger).toHaveBeenCalled();

 

  // });


  it('should call AddAddress of chechout add', function() { 
     component.updateTable();
   });


  it('should call AddAddress of chechout add', function () {

    let array = ["sam", "ram"];
    let id: Number;
    component.findIndex(array, id);
  });

  //  it('should call AddAddress of chechout add', function() {
  //    component.checkIn();
  //  });


  //  it('should call AddAddress of chechout add', function() {
  //    component.changeSeat();
  //  });


   it('should call AddAddress of chechout add', function() {
    
     component.countBookedSeat();
   });


   it('should call AddAddress of chechout add', function() {
     component.checkSeat();
   });
   it('should call AddAddress of chechout add', function() {
     component.changeCancel();
   });



   it('should call AddAddress of chechout add', function() {
      let data2:any;
     component.getSelected(data2);
   });


   it('should call AddAddress of chechout add', function() {
    let flight={
      passengers:[]
          };
      let data2=flight.passengers;
     component.getTrial(data2);
   });

   it('should call check of chechout add', function() {    
   
     checkpassenger=flight.passengers;
     component.check(checkpassenger);
   });





});
