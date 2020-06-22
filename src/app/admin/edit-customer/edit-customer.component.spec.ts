import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EditCustomerComponent } from './edit-customer.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminService } from '../admin.service';
import { of } from 'rxjs';

describe('EditCustomerComponent', () => {
  let component: EditCustomerComponent;
  let fixture: ComponentFixture<EditCustomerComponent>;
  let adminService:AdminService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomerComponent ],
      imports:[MatDialogModule,HttpClientTestingModule],
      providers:[{
        provide: MAT_DIALOG_DATA, useValue:{}
         },{
        provide: MatDialogRef,
        useValue: {}
         }],
    })
    .compileComponents();
  }));

  beforeEach(inject([AdminService],(admin)  => {
    fixture = TestBed.createComponent(EditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    adminService=admin;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load ngOnit',()=>{
    // let data=[{
    //   passengers:[]
    // }]
    let data={}
  
    spyOn(adminService,'getSelectedFlight').and.returnValue(of(data));
    component.ngOnInit();
    })


    

     it('should call AddAddress of chechout add', function() {
      let flight={
        passengers:[]
            };

       component.countBookedSeat();
     });



    
});
