import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  


  selectedFlight:any;
  EditPassenger:any;


  getSelectedFlight()
  {
    return this.selectedFlight;
  }
  setSelectedFlight(data: any) {
    this.selectedFlight=data;
  }

  constructor(private httpClient: HttpClient) { }


  get()
  {
    return this.httpClient.get("http://localhost:3000/planes");
  }

  SetEditedPassenger(data: any) {
    this.EditPassenger=data;
  }

  getEditedPassenger()
  {
    return this.EditPassenger;
  }
}
