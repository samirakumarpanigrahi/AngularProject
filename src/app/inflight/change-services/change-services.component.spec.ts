import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeServicesComponent } from './change-services.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InflightService } from '../inflight.service';
import { Flight } from 'src/app/core/_models/flight';
import { of } from 'rxjs';

describe('ChangeServicesComponent', () => {
  let component: ChangeServicesComponent;
  let fixture: ComponentFixture<ChangeServicesComponent>;
  let dataService:InflightService;
  let flight: Flight;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeServicesComponent ],
      imports:[HttpClientTestingModule],
      providers:[{
        provide: MAT_DIALOG_DATA, useValue:{}
        },{
        provide: MatDialogRef,
        useValue: {}
        }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeServicesComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(InflightService);
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
    let spy = spyOn(dataService,'getSelectedFlight')
    .and.returnValue(flight);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call service', async(() => {
    console.log(flight);
    fixture.whenStable().then(() => {
      expect(component.flight).toBe(flight)
    })
  }));



 


   
});
