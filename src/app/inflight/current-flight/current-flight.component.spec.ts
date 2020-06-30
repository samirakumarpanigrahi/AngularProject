import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFlightComponent } from './current-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Passenger } from 'src/app/core/_models/passenger';
import { InflightService } from '../inflight.service';
import { Flight } from 'src/app/core/_models/flight';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('CurrentFlightComponent', () => {
  let component: CurrentFlightComponent;
  let fixture: ComponentFixture<CurrentFlightComponent>;
  let dataService:InflightService;
 
  let passengers:Passenger[];
  
  let flight:Flight;
  let spy2 :any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,MatDialogModule,BrowserAnimationsModule],
      declarations: [ CurrentFlightComponent ],
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
    fixture = TestBed.createComponent(CurrentFlightComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(InflightService);
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
      
       let spy1 = spyOn(dataService,'getSelectedFlight')
       .and.returnValue(flight);
       spy2 = spyOn(dataService,'update')
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
  


  it('should call AddAddress of chechout add', function () {
    component.flight=flight;
    component.findIndex(passengers,"samir",13);
    expect( component.findIndex(passengers,"samir",13)).toBe(0);
  });



   it('should call AddAddress of chechout add', function() {
   component.editable=passengers[0];
   let spy = spyOn(component, 'updateTable');
     component.changeMeal(passengers[0]);
     expect(spy).toHaveBeenCalled();
   
   });

   it('should call AddAddress of chechout add', function() {
    component.editable=passengers[0];
    let spy = spyOn(component, 'updateTable');
      component.changeAncillary(passengers[0]);
      expect(spy).toHaveBeenCalled();
    
    });


    it('should call AddAddress of chechout add', function() {
      component.editable=passengers[0];
      let spy = spyOn(component, 'updateTable');
        component.changeShop(passengers[0]);
        expect(spy).toHaveBeenCalled();
      
      });


   it('should call AddAddress of chechout add',  async(() => {  
    // fixture.whenStable().then(() => {
     
    //   expect(component.passengers[0].customername).toBe(passengers[0].customername)
    // })
    component.updateTable();
     expect(spy2).toHaveBeenCalled();
   }));

   it('should call AddAddress of chechout add', function () {
    
    component.flight=flight;
    component.editable=passengers[0]
    component.openDialog("samir",passengers[0]);
    expect( component.editable).toBe(passengers[0]);
  });

  


  

   it('should call AddAddress of chechout add', function() {
      let data2:any;
     component.getSelected(data2);
   });


   


  


});
