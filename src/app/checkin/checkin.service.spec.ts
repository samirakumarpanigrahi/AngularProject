import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CheckinService } from './checkin.service';

describe('CheckinService', () => {
  let service: CheckinService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [CheckinService]
    });
    service = TestBed.inject(CheckinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
