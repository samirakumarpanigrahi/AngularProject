import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InflightService {

  constructor(private httpClient: HttpClient) { }


  get()
  {
    return this.httpClient.get("http://localhost:3000/planes");
  }


  selectedFlight:any;
  setSelectedFlight(data: any) {
    this.selectedFlight=data;
  }

  getSelectedFlight()
  {
    return this.selectedFlight;
  }

}
