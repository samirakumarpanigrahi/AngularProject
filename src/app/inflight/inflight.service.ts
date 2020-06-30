import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../core/_models/flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InflightService {
  update(id: any, flight: Flight):Observable<Flight> {
    return this.httpClient.put<Flight>("http://localhost:3000/planes/" + id, flight)
  }

  constructor(private httpClient: HttpClient) { }


  get():Observable<Flight[]>
  {
    return this.httpClient.get<Flight[]>("http://localhost:3000/planes");
    
  }


  selectedFlight:Flight;
  setSelectedFlight(data: Flight) {
    this.selectedFlight=data;
  }

  getSelectedFlight()
  {
    return this.selectedFlight;
  }

}
