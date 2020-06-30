import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../core/_models/flight';
import { Observable } from 'rxjs';
import { Passenger } from '../core/_models/passenger';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  selectedFlight: Flight;
  selectedPassenger: Passenger;


  constructor(private httpClient: HttpClient) { }

  update(id: number, flight: Flight): Observable<Flight> {
    return this.httpClient.put<Flight>("http://localhost:3000/planes/" + id, flight)
  }


  
  SelectedPassenger(data: Passenger) {
    this.selectedPassenger = data;

  }

  getSelectedPassenger() {
    return this.selectedPassenger;
  }


  setSelectedFlight(data: Flight) {
    this.selectedFlight = data;
  }


  getSelectedFlight() {
    return this.selectedFlight;
  }

  
  get(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>("http://localhost:3000/planes");

  }
  

}
