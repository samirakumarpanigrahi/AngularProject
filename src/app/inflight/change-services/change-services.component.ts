import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InflightService } from '../inflight.service';
import { Passenger } from 'src/app/core/_models/passenger';
import { Flight } from 'src/app/core/_models/flight';

@Component({
  selector: 'app-change-services',
  templateUrl: './change-services.component.html',
  styleUrls: ['./change-services.component.css']
})
export class ChangeServicesComponent implements OnInit{

  action:string;
  local_data:any;
  ancillaryServices:string[];
specialMeals:string[];
shoppingItems:string[];
flight:Flight;
  constructor(
    public dialogRef: MatDialogRef<ChangeServicesComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Passenger,
    private service:InflightService) {
    console.log(data);
    this.local_data = {...data};
    console.log(this.local_data);
    
    this.action = this.local_data.action;
  }

  ngOnInit()
  {
    this.flight = this.service.getSelectedFlight();
    
    this.ancillaryServices=this.flight.ancillaryServices;
    this.specialMeals=this.flight.specialMeals;
    this.shoppingItems=this.flight.shoppingItems;
    console.log(this.flight);
  }
  
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
