import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CheckinService } from '../../checkin.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Flight } from 'src/app/core/_models/flight';
import { Passenger } from 'src/app/core/_models/passenger';




@Component({
  selector: 'app-display-flight',
  templateUrl: './display-flight.component.html',
  styleUrls: ['./display-flight.component.css']
})
export class DisplayFlightComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: CheckinService) { }
  flight: Flight;
  checkin = "checkin"
  filterValues: any = {};
  categoryFilter: any;
  passengers: Passenger[] = [];
  checkinFilter: boolean;
  categories = ["infants", "wheel", "normal"]
  displayedColumns: string[] = ['cId', 'customername', 'seatno', 'checkenin', 'passport', 'address', 'DOB', 'category', 'ancillayService', 'action'];
  dataSource: MatTableDataSource<Passenger>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  ngOnInit() {
    this.flight = this.service.getSelectedFlight();
    this.passengers = this.flight.passengers;
    this.dataSource = new MatTableDataSource(this.passengers);
    this.dataSource.filterPredicate = ((data: Passenger, filter: string): boolean => {
      const filterValues = JSON.parse(filter);

      return (this.categoryFilter ? data.category.trim().toLowerCase() === filterValues.category : true) &&
        (this.checkinFilter ? data.checkenin === filterValues.checkenin : true);

    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }



  applyFilter(column: string, filterValue: any) {
    this.filterValues[column] = filterValue;
    this.dataSource.filter = JSON.stringify(this.filterValues);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  getPassenger(data: Passenger) {
    this.service.SelectedPassenger(data);
    this.router.navigate(['passenger'], { relativeTo: this.route });

  }




  getSelected(event) {
    console.log(event)
  }




  seatsLayout: seatsLayout = {
    totalRows: 9,
    seatsPerRow: 6,
    seatNaming: 'rowType',
    booked: []
  }



}


export class seatsLayout {
  totalRows: Number;
  seatsPerRow: Number;
  seatNaming: String;
  booked: String[]
}
