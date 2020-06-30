import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CheckinService } from '../../checkin.service';
import { HttpClient } from '@angular/common/http';
import { Flight } from 'src/app/core/_models/flight';
import { Passenger } from 'src/app/core/_models/passenger';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: CheckinService,
    private http: HttpClient) { }
  passenger: Passenger;
  isChangeSeat = false;
  allPassenger: Passenger[];
  flight: Flight;
  checkedSeat: String[] = [];
  seatConfirm: any;
  isCheckIn: any;
  updateedSeat: any;
  seatBook = "seatBook";
  totalSeat = ["1A", "1B", "1C", "1D", "1E", "1F", "2A", "2B", "2C", "2D", "2E", "2F",
    "3A", "3B", "3C", "3D", "3E", "3F",
    "4A", "4B", "4C", "4D", "4E", "4F",
    "5A", "5B", "5C", "5D", "5E", "5F",
    "6A", "6B", "6C", "6D", "6E", "6F",
    "7A", "7B", "7C", "7D", "7E", "7F",
    "8A", "8B", "8C", "8D", "8E", "8F",
    "9A", "9B", "9C", "9D", "9E", "9F"];

  bookedSeat: String[] = [];
  reaminingSeat = this.totalSeat;



  ngOnInit(): void {
    this.passenger = this.service.getSelectedPassenger()
    console.log(this.passenger);
    this.flight = this.service.getSelectedFlight();
    this.allPassenger = this.flight.passengers;
    let checkedIn = this.check(this.allPassenger);
  }


  seatsLayout: seatsBook = {
    totalRows: 9,
    seatsPerRow: 6,
    seatNaming: 'rowType',
    booked: this.checkedSeat
  }


  check(checkpassenger: Passenger[]) {
    checkpassenger.find((a) => {
      if (a.checkenin === true) {
        this.checkedSeat.push(a.seatno);
      }
    })
  }


  getSelected(event) {
    console.log(event)
  }



  getTrial(event) {
    this.seatConfirm = event;
    if (this.seatConfirm[0] === this.passenger.seatno) {
      this.isCheckIn = true;
    }
    if (this.seatConfirm.length == 0) {
      this.isCheckIn = false;
    }
  }



  changeCancel() {
    this.isChangeSeat = !this.isChangeSeat;
  }


  checkSeat() {
    this.isChangeSeat = !this.isChangeSeat;
    this.countBookedSeat();
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

  changeSeat() {
    let index = this.findIndex(this.flight.passengers, this.passenger.customername, this.passenger.cId);
    this.flight.passengers[index].seatno = this.updateedSeat;
    this.flight.passengers[index].checkenin = true;
    let x = this.updateTable();
    this.isChangeSeat = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }



  checkIn() {
    let index = this.findIndex(this.flight.passengers, this.passenger.customername, this.passenger.cId);
    this.flight.passengers[index].checkenin = this.isCheckIn != null ? this.isCheckIn : this.passenger.checkenin;
    let x = this.updateTable();
    this.router.navigate(['../'], { relativeTo: this.route });
  }



  findIndex(array: Passenger[], name: string, id: number) {
    for (let index = 0; index < array.length; index++) {
      if (name === array[index].customername && id == array[index].cId) {
        return index;
      }

    }
  }



  updateTable() {
    this.service.update(this.flight.id, this.flight)
      .subscribe((data) => {
        this.flight = data;
        this.service.setSelectedFlight(this.flight)
      })
    return true;
  }
}




export class seatsBook {
  totalRows: Number;
  seatsPerRow: Number;
  seatNaming: String;
  booked: String[]
}
