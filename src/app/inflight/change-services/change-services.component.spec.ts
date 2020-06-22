import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeServicesComponent } from './change-services.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChangeServicesComponent', () => {
  let component: ChangeServicesComponent;
  let fixture: ComponentFixture<ChangeServicesComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



 


   
});
