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
    this.allPassenger = this.flight?.passengers;
    console.log(this.allPassenger);



     let checkedIn = this.check(this.allPassenger);

  }


  seatsLayout: seatsBook = {
    totalRows: 9,
    seatsPerRow: 6,
    seatNaming: 'rowType',
    booked: this.checkedSeat
  }

  check(checkpassenger:Passenger[]) { 
    checkpassenger?.find((a) => {
      console.log(a);
      if (a.checkenin === true) {

        this.checkedSeat.push(a.seatno);
      }

    })


    // console.log(this.checkedSeat);

  }
  getSelected(event) {
    console.log(event)
  }
  getTrial(event) {
    this.seatConfirm = event;
    console.log(event);
    if (this.seatConfirm[0] === this.passenger?.seatno) {
      this.isCheckIn = true;
    }
    if (this.seatConfirm.length == 0) {
    this.isCheckIn = false;

    }
    console.log(this.isCheckIn);

  }
  changeCancel() {
    this.isChangeSeat = !this.isChangeSeat;
  }
  checkSeat() {
    this.isChangeSeat = !this.isChangeSeat;
    this.countBookedSeat();
  }
  countBookedSeat() {


    this.allPassenger?.find((a) => {
      this.totalSeat?.find((b) => {
        if (a.seatno === b) {
          const index: number = this.reaminingSeat.indexOf(b);
          console.log(index);

          if (index !== -1) {
            this.reaminingSeat.splice(index, 1);
          }


        }

      })
    })

  }

  changeSeat() {
    console.log(this.updateedSeat);
    let index = this.findIndex(this.flight?.passengers, this.passenger?.cId);



   
      this.flight.passengers[index].seatno = this.updateedSeat;
   
    
    let x = this.updateTable();
    this.isChangeSeat = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }



  checkIn() {
    let index = this.findIndex(this.flight?.passengers, this.passenger?.cId);
    console.log(this.isCheckIn);



    this.flight.passengers[index].checkenin = this.isCheckIn != null ? this.isCheckIn : this.passenger?.checkenin;
    console.log(this.flight);

    let x = this.updateTable();

    this.router.navigate(['../'], { relativeTo: this.route });
  }

  findIndex(array, id) {
    for (let index = 0; index < array?.length; index++) {
      if (id == array[index].cId) {
        return index;
      }

    }
  }
  updateTable() {
    this.http.put<Flight>("http://localhost:3000/planes/" + this.flight?.id, this.flight).subscribe((data) => {
      this.flight = data;
      console.log(this.flight);





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
// export class passengerData {
//   cId: Number;
//   customername: String;
//   checkenin: boolean;
//   passport: String;
//   address: String;
//   DOB: String;
//   category: String;
//   ancillayService: String[];
//   action: String;
//   seatno: String;
//   meal: String;
//   shop: String[]
// }
// export class Flight {
//   id: Number;
//   planename: String;
//   planeno: String;
//   departure: String;
//   departureFrom: String;
//   arrivalTo: String;
//   arrival: String;
//   duration: String;
//   price: Number;
//   ancillaryServices: String[];
//   specialMeals: String[];
//   shoppingItems: String[];
//   image: String;

//   passengers: passengerData[];
// }
