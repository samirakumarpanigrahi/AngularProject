
import { AdminService } from '../admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { Passenger } from 'src/app/core/_models/passenger';
import { HttpClient } from '@angular/common/http';
import { Flight } from 'src/app/core/_models/flight';


@Component({
  selector: 'app-selected-flight',
  templateUrl: './selected-flight.component.html',
  styleUrls: ['./selected-flight.component.css']
})
export class SelectedFlightComponent implements OnInit {

  displayedColumns: string[] = ['cId', 'customername', 'seatno', 'checkenin', 'passport', 'address', 'DOB', 'category', 'ancillayService', 'meal', 'Action'];
  dataSource: MatTableDataSource<Passenger>;
  changeAnci = false;
  changeSpecialMeals = false;
  changeShoppingItems = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  passengers: Passenger[] = [];
  datasourceAction: Passenger;
  editable: Passenger;
  flight: any;
  isPassport = false;
  isAddress = false;
  isDOB = false;
  filterValues: any = {};
  index: number;
  constructor(private adminService: AdminService, public dialog: MatDialog, private http: HttpClient) {

  }



  ngOnInit(): void {
    this.flight = this.adminService.getSelectedFlight();
    this.passengers = this.flight?.passengers;
    this.dataSource = new MatTableDataSource(this.passengers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }




  filter() {
    this.dataSource.filterPredicate = ((data: Passenger, filter: string): boolean => {
      const filterValues = JSON.parse(filter);
      return (this.isPassport ? data.passport.trim().toLowerCase() === filterValues.passport : true)
        &&
        (this.isAddress ? data.address.trim().toLowerCase() === filterValues.address : true)
        &&
        (this.isDOB ? data.DOB.trim().toLowerCase() === filterValues.DOB : true);
    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyCheckFilter(column: string, filterValue: string) {
    this.filterValues[column] = filterValue;
    let y = this.filter();
    this.dataSource.filter = JSON.stringify(this.filterValues);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  openDialog(action, obj) {
    console.log(action, obj);
    obj.action = action;
    this.editable = obj;
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '500px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      if (result.event == 'Add') {
        this.addRowData(result.data);

      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }



  addRowData(add: Passenger) {
    this.datasourceAction = new Passenger();
    this.datasourceAction.cId = add.cId != null ? add.cId : 1,
      this.datasourceAction.customername = add.customername != null ? add.customername : '',
      this.datasourceAction.seatno = add.seatno != null ? add.seatno : '',
      this.datasourceAction.checkenin = false,
      this.datasourceAction.passport = add.passport != null ? add.passport : "",
      this.datasourceAction.address = add.address != null ? add.address : "",
      this.datasourceAction.DOB = add.DOB != null ? add.DOB : "",
      this.datasourceAction.category = add.category != null ? add.category : "",
      this.datasourceAction.ancillayService = add.ancillayService != null ? add.ancillayService : [],
      this.datasourceAction.meal = add.meal != null ? add.meal : "",
      this.datasourceAction.shop = add.shop != null ? add.shop : []
    this.flight.passengers.push(this.datasourceAction)
    let x = this.updateTable();

  }



  updateRowData(update: Passenger) {
    this.index = this.findIndex(this.flight.passengers, this.editable.customername, this.editable.cId);

    this.flight.passengers[this.index].customername = update.customername;
    this.flight.passengers[this.index].seatno = update.seatno;
    this.flight.passengers[this.index].passport = update.passport;
    this.flight.passengers[this.index].address = update.address;
    this.flight.passengers[this.index].DOB = update.DOB;
    this.flight.passengers[this.index].category = update.category;
    this.flight.passengers[this.index].ancillayService = update.ancillayService;
    this.flight.passengers[this.index].meal = update.meal;
    this.flight.passengers[this.index].shop = update.shop;

    let x = this.updateTable();

  }


  findIndex(array: Passenger[], name: string, id: number) {
    for (let index = 0; index < array.length; index++) {
      if (name === array[index].customername && id === array[index].cId) {
        return index;
      }

    }
  }


  deleteRowData(deletePassenger: Passenger) {
    let index = this.findIndex(this.flight.passengers, this.editable.customername, this.editable.cId);
    this.flight.passengers.splice(index, 1);
    let x = this.updateTable();

  }

  updateTable() {
    this.adminService.update(this.flight.id, this.flight)
      .subscribe((data) => {
        this.flight = data;
        this.adminService.setSelectedFlight(this.flight);
        this.passengers = this.flight.passengers;
        this.dataSource = new MatTableDataSource(this.passengers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      })
    this.table?.renderRows();
    return true;
  }



  addAncillary() {
    this.flight.ancillaryServices = this.flight.ancillaryServices.split(',');
    let x = this.updateTable();
    this.changeAnci = false;
  }


  
  addspecialMeals() {
    this.flight.specialMeals = this.flight.specialMeals.split(',');
    let x = this.updateTable();
    this.changeSpecialMeals = false;
  }


  addshoppingItems() {
    this.flight.shoppingItems = this.flight.shoppingItems.split(',');
    let x = this.updateTable();
    this.changeShoppingItems = false;
  }


}





