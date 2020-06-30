import { Component, OnInit, Optional, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdminService } from '../admin.service';
import { Passenger } from 'src/app/core/_models/passenger';
import { Flight } from 'src/app/core/_models/flight';



@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  action: string;
  local_data: any;
  categories: string[] = ['wheel', 'infants', 'normal'];
  ancillaryServices: string[];
  allPassenger: Passenger[];


  totalSeat = ["1A", "1B", "1C", "1D", "1E", "1F", "2A", "2B", "2C", "2D", "2E", "2F",
    "3A", "3B", "3C", "3D", "3E", "3F",
    "4A", "4B", "4C", "4D", "4E", "4F",
    "5A", "5B", "5C", "5D", "5E", "5F",
    "6A", "6B", "6C", "6D", "6E", "6F",
    "7A", "7B", "7C", "7D", "7E", "7F",
    "8A", "8B", "8C", "8D", "8E", "8F",
    "9A", "9B", "9C", "9D", "9E", "9F"];

  bookedSeat: String[] = [];
  specialMeals: string[];
  shoppingItems: string[];
  reaminingSeat = this.totalSeat;



  constructor(public dialogRef: MatDialogRef<EditCustomerComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Passenger,
    private service: AdminService) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }


  flight: Flight;
  ngOnInit(): void {
    this.flight = this.service.getSelectedFlight();
    this.ancillaryServices = this.flight.ancillaryServices;
    this.specialMeals = this.flight.specialMeals;
    this.shoppingItems = this.flight.shoppingItems;
    this.allPassenger = this.flight.passengers;
    let y = this.countBookedSeat()

  }



  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }



  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }


  countBookedSeat() {
    this.allPassenger.find((a) => {
      this.totalSeat.find((b) => {
        if (a.seatno === b) {
          const index: number = this.reaminingSeat.indexOf(b);
          if (index !== -1) {
            this.reaminingSeat.splice(index, 1);
          }
        }

      })
    })
  }
}
