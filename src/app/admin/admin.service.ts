import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../core/_models/flight';
import { Observable } from 'rxjs';
import { Passenger } from '../core/_models/passenger';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 


  selectedFlight:Flight;
  EditPassenger:Passenger;

  constructor(private httpClient: HttpClient) { }

  getSelectedFlight()
  {
    return this.selectedFlight;
  }


  setSelectedFlight(data: Flight) {
    this.selectedFlight=data;
  }

 


  get():Observable<Flight[]>
  {
    return this.httpClient.get<Flight[]>("http://localhost:3000/planes");
  }


  update(id: number, flight: Flight):Observable<Flight> {
    return this.httpClient.put<Flight>("http://localhost:3000/planes/" + id,flight) 
  }
  

  SetEditedPassenger(data: Passenger) {
    this.EditPassenger=data;
  }

  getEditedPassenger()
  {
    return this.EditPassenger;
  }

  
}
