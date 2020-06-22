import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {


  selectedPassenger:any;
  SelectedPassenger(data: any) {
    this.selectedPassenger=data;

  }
  
  getSelectedPassenger()
  {
    
    
    return this.selectedPassenger;
  }


  selectedFlight:any;
  setSelectedFlight(data: any) {
    this.selectedFlight=data;
  }

  getSelectedFlight()
  {
    return this.selectedFlight;
  }

  constructor(private httpClient: HttpClient) { }


  get()
  {
    return this.httpClient.get("http://localhost:3000/planes");
  }

}
