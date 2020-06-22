import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { InflightService } from './inflight.service';

describe('InflightService', () => {
  let service: InflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
        providers: [InflightService]
    });
    service = TestBed.inject(InflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
