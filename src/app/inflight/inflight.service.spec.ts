import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { InflightService } from './inflight.service';
import { Flight } from '../core/_models/flight';

describe('InflightService', () => {
  let service: InflightService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
        providers: [InflightService]
    });
    service = TestBed.inject(InflightService);
    injector = getTestBed();
   
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpMock.verify();
  });  

  let flight:Flight={"id": 1,
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
  const dummyUserListResponse = {
    data:[flight]
  }



  it('getUserList() should return data', () => {
    service.get().subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse.data);
    });
    const req = httpMock.expectOne('http://localhost:3000/planes');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse.data);
  });


  it('getUserList() should return data', () => {
    service.update(1,flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/planes/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });



  it('getUserList() should return data', () => {
    service.setSelectedFlight(flight);
    expect(service.selectedFlight).toBe(flight)
  });

  it('getUserList() should return data', () => {
    service.selectedFlight=flight;
    service.getSelectedFlight();
    expect(service.getSelectedFlight()).toBe(flight)
  });

  
});
