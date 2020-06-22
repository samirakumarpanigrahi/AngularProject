import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [AdminService]
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // it('should be created', () => {
  //   const service: AdminService = TestBed.get(AdminService);
  //   let data1:any;
  //   expect(service.setSelectedFlight(data1)).toBeTruthy();
  // });
  // it('should be created', () => {
  //   const service: AdminService = TestBed.get(AdminService);
  //   expect(service.getSelectedFlight()).toBeTruthy();
  // });


  // it('should be created', () => {
  //   const service: AdminService = TestBed.get(AdminService);
  //   let data1:any;
  //   expect(service.SetEditedPassenger(data1)).toBeTruthy();
  // });
  // it('should be created', () => {
  //   const service: AdminService = TestBed.get(AdminService);
  //   expect(service.getEditedPassenger()).toBeTruthy();
  // });
});
