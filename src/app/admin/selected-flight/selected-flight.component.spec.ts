import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { SelectedFlightComponent } from './selected-flight.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../admin.service';
import { of, Observable } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Flight } from 'src/app/core/_models/flight';
import { Passenger } from 'src/app/core/_models/passenger';

describe('SelectedFlightComponent', () => {
  let component: SelectedFlightComponent;
  let fixture: ComponentFixture<SelectedFlightComponent>;
  let dataService: AdminService;
  let flight: any;
  let passengers: Passenger[];
  let spy2:any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, BrowserAnimationsModule],
      providers: [{
        provide: MAT_DIALOG_DATA, useValue: {}
      }, {
        provide: MatDialogRef,
        useValue: {}
      }],
      declarations: [SelectedFlightComponent]
    })
      .compileComponents();
  }));

  beforeEach(inject([AdminService], (admin) => {
    fixture = TestBed.createComponent(SelectedFlightComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(AdminService);
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
      spy2 = spyOn(dataService,'update')
      .and.returnValue(of(flight));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service', async(() => {
    fixture.whenStable().then(() => {
      expect(component.flight.planeno).toBe(flight.planeno)
    })
  }))


  
  it('should call updateTable',  async(() => {  
     component.updateTable();
     expect(spy2).toHaveBeenCalled();
   }));


  it('should call applyCheckFilter', function () {
    let data1 = "passport";
    let data2 = "";
    component.applyCheckFilter(data1, data2);
    expect(component.filterValues[data1]).toBe(data2)

  });



  it('should call addRowData', function () {

    component.addRowData(passengers[0]);
    expect(component.datasourceAction.customername).toBe(passengers[0].customername);
  });

  it('should call deleteRowData', function () {
    component.flight = flight;
    component.editable=passengers[0];
    fixture.detectChanges();
    component.deleteRowData(passengers[0]);
  });

  it('should add shopping', () => {
    let flight1 = flight;
    flight1.shoppingItems = "sa,sd,we";
    fixture.detectChanges();
    component.flight = flight1;
    component.addshoppingItems();
    expect(component.addAncillary).toBeTruthy();
  });

  it('should add ancillary', () => {
    let flight1 = flight;
    flight1.ancillaryServices = "sa,sd,we";
    fixture.detectChanges();
    component.flight = flight1;
    component.addAncillary();
    expect(component.addAncillary).toBeTruthy();
  });

  it('should add ancillary', () => {
    let flight1 = flight;
    flight1.specialMeals = "sa,sd,we";
    fixture.detectChanges();
    component.flight = flight1;
    component.addspecialMeals();
    expect(component.addAncillary).toBeTruthy();
  });


  it('should call updateRowData', function () {
    component.flight=flight;
    component.editable=passengers[0];
    component.updateRowData(passengers[0]);
  });

  


  it('should call findIndex', function () {
    component.index = 1;
    component.flight=flight;
    component.findIndex(passengers,"samir",13);
    expect( component.findIndex(passengers,"samir",13)).toBe(0);
  });

  it('should call openDialog', function () {
    component.index = 1;
    component.flight=flight;
    component.editable=passengers[0]
    component.openDialog("samir",passengers[0]);
    expect( component.editable).toBe(passengers[0]);
  });


});
