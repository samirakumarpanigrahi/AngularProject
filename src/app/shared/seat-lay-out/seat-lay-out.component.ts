import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { mealSeatsLayout } from 'src/app/inflight/current-flight/current-flight.component';
import { InflightService } from 'src/app/inflight/inflight.service';
import { seatsBook } from 'src/app/checkin/components/passenger-detail/passenger-detail.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-seat-lay-out',
  templateUrl: './seat-lay-out.component.html',
  styleUrls: ['./seat-lay-out.component.scss']
})
export class SeatLayOutComponent implements OnInit {

  @Input() seatsLayout: seatsBook;
  @Input() flight:any;
@Input() type:string;
@Output() trial=new EventEmitter();
  
  onlySeat: any[] = [];
  rows = new Array();
  database :any=[];
  


  meals: Tile[] = [
    {text: 'Special Meal', cols: 1, rows: 1, color: 'deeppink'},
    {text: 'Normal Meal', cols: 1, rows: 1, color: 'cyan'},
   
  ];

  booking: Tile[] = [
    {text: 'Checkin', cols: 1, rows: 1, color: '#bada55'},
    {text: 'Not Checkin', cols: 1, rows: 1, color: '#F42536'},
   
  ];

  // category: Tile[] = [
  //   {text: 'Checkin + Wheel Chair', cols: 1, rows: 1, color: 'cyan'},
  //   {text: 'Checkin + infant', cols: 1, rows: 1, color: 'darkorchid'},
  //   {text: 'Checkin', cols: 1, rows: 1, color: ''},
  //   {text: 'Not Checkin', cols: 1, rows: 1, color: '#F42536'},
   
  // ];

  ngOnInit() {
    this.database=this.flight?.passengers;
     console.log(this.type);
     
      
      
        console.log(this.database);
        
    

    var rows = new Array()
    var seatsInARow = new Array()
    var seatChar;
    if (this.seatsLayout != undefined && this.seatsLayout.hasOwnProperty('totalRows')) {
      if (this.seatsLayout.seatNaming = 'rowType') {
        for (let row = 0; row < this.seatsLayout.totalRows; row++) {
          for (let seats = 0; seats < this.seatsLayout.seatsPerRow; seats++) {
            seatChar = String.fromCharCode(65 + seats)
            seatsInARow.push((row + 1).toString() + seatChar);
          }
          rows.push(seatsInARow);
          seatsInARow = new Array();
        }
      }
    }
    this.rows = rows


  }

  // done() {
  //   this.confirm.emit(this.seatsLayout.booked);
  
  //   this.onlySeat = [];

  // }
  
 
  seatAction(seat) {
   
    if (this.seatsLayout.booked.indexOf(seat) >= 0) {

      this.seatsLayout.booked = this.seatsLayout.booked.filter(bookedSeat => {
        return bookedSeat != seat;
      })
    }
    else {
      this.seatsLayout.booked.push(seat);
      this.onlySeat.push(seat);

    }
    this.trial.emit(this.onlySeat);
  }

 
 

  

  isNormalMeal(data:String):any {
let response;
    this.database.find((a) => {
     
      if (a.seatno === data && a.meal === "Normal Meal") {
       
        response=true;
        }
    })
  return response;
   
  }
  isSpecialMeal(data) {
    let response;
    this.database.find((a) => {
      if (a.seatno === data && a.meal === "Special Meal" ) {
        response= true 
      }
    })
    return response;
  }



  isWheel(data:String):any {
    
    
    let response;
        this.database.find((a) => {
         
          if (a.seatno === data && a.category === "wheel") {
           
            response=true;
            }
        })
      return response;
       
      }
      isInfant(data) {
        let response;
        this.database.find((a) => {
          if (a.seatno === data && a.category === "infants" ) {
            response= true 
          }
        })
        return response;
      }
    
    
      isNormal(data) {
        let response;
    
        this.database.find((a) => {
          if (a.seatno === data && a.category === "normal") {
           response=true;
          }
        })
    
        return response;
      }

}
