import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { SelectedFlightComponent } from './selected-flight.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../admin.service';
import { of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'src/app/checkin/components/display-flight/display-flight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectedFlightComponent', () => {
  let component: SelectedFlightComponent;
  let fixture: ComponentFixture<SelectedFlightComponent>;
  let adminService: AdminService;

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
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should call AddAddress of chechout service', function () {
    component.updateTable();
  });


  // it('should call AddAddress of chechout add', function() {
  //   let data2={
  //     action:[]
  //         };
  //     let data1:string;

  //     let editable:any;
  //    component.openDialog(data1,data2);
  //  });

  it('should call AddAddress of chechout add', function () {
    let flight = {
      passengers: []
    };
    let data1: string;
    let data2: string;
    component.applyCheckFilter(data1, data2);
  });
  it('should call AddAddress of chechout add', function () {
    let flight = {
      passengers: []
    };
    let data: any;
    component.addRowData(data);
  });

   it('should call AddAddress of chechout add', function() {
    let flight={
      passengers:[]
          };
      let data:any;
     component.updateRowData(data);
   });

  //  it('should call AddAddress of chechout add', function() {
  //   let flight={
  //     passengers:[]
  //         };
  //     let data:any;
  //    component.deleteRowData(data);
  //  });


  // it('should call AddAddress of chechout add', function() {
  //   let flight={
  //     passengers:[]
  //         };
  //    component.addAncillary();
  //  });

  //    it('should call AddAddress of chechout add', function() {
  //     let flight={
  //       passengers:[]
  //           };
  //      component.addshoppingItems();
  //    });
  //    it('should call AddAddress of chechout add', function() {
  //     let flight={
  //       passengers:[]
  //           };
  //      component.addspecialMeals();
  //    });


  //   it('should call AddAddress of chechout delete', function() {

  //     let flight={
  // passengers:[]
  //     };
  //     var datasourceAction;
  //     let data:any;
  //     // let index:number
  //      component.deleteRowData(data);




  //    });

});
