import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFlightComponent } from './current-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
describe('CurrentFlightComponent', () => {
  let component: CurrentFlightComponent;
  let fixture: ComponentFixture<CurrentFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,MatDialogModule],
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
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


  // it('should call AddAddress of chechout add', function() {
  //   let flight={
  //     passengers:[]
  //         };

  //       let totalSeat:string[];
  //     let allPassenger=[{seatno:String}]
  //     let data1:string;
  //     let data2:any;
  //     let editable:any;
  //     // let isCheckIn:Boolean;
  //    component.updateTable();
  //  });


   it('should call AddAddress of chechout add', function() {
    let flight={
      passengers:[]
          };

        let totalSeat:string[];
      let allPassenger=[{seatno:String}]
      let data1:string;
      let data2:any;
      let editable:number;
      // let isCheckIn:Boolean;
     component.findIndex(totalSeat,editable);
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
     component.changeMeal(data2);
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
     component.updateTable();
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
     component.changeShop(data2);
   });


  //  it('should call AddAddress of chechout add', function() {
  //   let flight={
  //     passengers:[]
  //         };

  //       let totalSeat:string[];
  //     let allPassenger=[{seatno:String}]
  //     let data1:string;
  //     let data2:any;
  //     let editable:any;
  //     // let isCheckIn:Boolean;
  //    component.changeAncillary(data2);
  //  });

   it('should call AddAddress of chechout add', function() {
      let data2:any;
     component.getSelected(data2);
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
     component.applyFilter(data2);
   });



  //  it('should call AddAddress of chechout add', function() {
  //   let flight={
  //     passengers:[]
  //         };

  //       let totalSeat:string[];
  //     let allPassenger=[{seatno:String}]
  //     let data1:string;
  //     let data2:any;
  //     let editable:any;
  //     // let isCheckIn:Boolean;
  //    component.openDialog(data1,data2);
  //  });


});
