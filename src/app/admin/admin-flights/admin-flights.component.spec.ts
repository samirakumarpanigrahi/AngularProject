import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AdminFlightsComponent } from './admin-flights.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminFlightPipe } from '../admin-flight.pipe';
import { AdminService } from '../admin.service';
import { of } from 'rxjs';
import { Flight } from 'src/app/core/_models/flight';

describe('AdminFlightsComponent', () => {
  let component: AdminFlightsComponent;
  let fixture: ComponentFixture<AdminFlightsComponent>;


  let adminService: AdminService;
  let flight: Flight[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [AdminFlightsComponent, AdminFlightPipe]
    })
      .compileComponents();
  }));

  beforeEach(inject([AdminService], (admin) => {
    fixture = TestBed.createComponent(AdminFlightsComponent);
    component = fixture.componentInstance;
    adminService = fixture.debugElement.injector.get(AdminService);
    flight = [{
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
    let spy = spyOn(adminService, 'get')
      .and.returnValue(of(flight));
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call service', async(() => {
    console.log(flight);
    fixture.whenStable().then(() => {
      expect(component.flight).toBe(flight)
    })
  }))


  it('should load selected Flight', () => {
    let data: Flight;
    let spy = spyOn(adminService, 'setSelectedFlight');
    component.selectedFlight(data);
    expect(spy).toHaveBeenCalled();
  })
});
