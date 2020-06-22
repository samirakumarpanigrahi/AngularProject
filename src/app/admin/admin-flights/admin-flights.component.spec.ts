import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AdminFlightsComponent } from './admin-flights.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminFlightPipe } from '../admin-flight.pipe';
import { AdminService } from '../admin.service';
import { of } from 'rxjs';

describe('AdminFlightsComponent', () => {
  let component: AdminFlightsComponent;
  let fixture: ComponentFixture<AdminFlightsComponent>;
  let adminService: AdminService;
  let testAdminService:AdminService;

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
    fixture.detectChanges();
    adminService = admin;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should load selected Flight', () => {
    let data = {};
    //spyOn(adminService,'setSelectedFlight');
    component.selectedFlight(data);
  })
});
