
import { AdminService } from '../admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { Passenger } from 'src/app/core/_models/passenger';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  cId: number,
  customername: string,
  seatno: string,
  checkenin: boolean,
  passport: string,
  address: string,
  DOB: string,
  category: string,
  ancillayService: string[],
  meal: string;
  shop: string[]

}




@Component({
  selector: 'app-selected-flight',
  templateUrl: './selected-flight.component.html',
  styleUrls: ['./selected-flight.component.css']
})
export class SelectedFlightComponent implements OnInit {

  displayedColumns: string[] = ['cId', 'customername', 'seatno', 'checkenin', 'passport', 'address', 'DOB', 'category', 'ancillayService','meal', 'Action'];
  dataSource: MatTableDataSource<UserData>;
  changeAnci=false;
  changeSpecialMeals=false;
  changeShoppingItems=false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  passengers: UserData[] = [];
  datasourceAction: UserData;
  editable: any;
  flight: any;
  isPassport=false;
  isAddress=false;
  isDOB=false;
  filterValues: any = {};
  constructor(private adminService: AdminService, public dialog: MatDialog, private http: HttpClient) {

  }
 

  ngOnInit(): void {
    this.flight = this.adminService.getSelectedFlight();
    console.log(this.flight);
    this.passengers = this.flight?.passengers;
    console.log(this.passengers);

    this.dataSource = new MatTableDataSource(this.passengers);
    
    
    

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

filter()
{
  this.dataSource.filterPredicate = ((data: UserData, filter: string): boolean => {
    const filterValues = JSON.parse(filter);
    console.log(data);
    


    return (this.isPassport ? data.passport.trim().toLowerCase() === filterValues.passport : true) 
    &&
    (this.isAddress ? data.address.trim().toLowerCase()===filterValues.address: true)
    &&
    (this.isDOB ? data.DOB.trim().toLowerCase()===filterValues.DOB: true);
  })

  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

 
  applyCheckFilter(column: string, filterValue: string) {
    console.log(filterValue);
    
    this.filterValues[column] = filterValue;
    console.log(this.filterValues);
    let y=this.filter();

    this.dataSource.filter = JSON.stringify(this.filterValues);
console.log(this.dataSource.filter);

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
  addRowData(add) {
    console.log(add);
    this.datasourceAction = new Passenger();

    this.datasourceAction.cId = add?.cId != null ?add?.cId :1,
      this.datasourceAction.customername =add?.customername!=null? add.customername:'',
      this.datasourceAction.seatno = add?.seatno!=null?add.seatno:'',
      this.datasourceAction.checkenin = false,
      this.datasourceAction.passport =add?.passport!=null? add.passport:"",
      this.datasourceAction.address = add?.address!=null?add.address:"",
      this.datasourceAction.DOB = add?.DOB!=null?add.DOB:"",
      this.datasourceAction.category = add?.category!=null?add.category:"",
      this.datasourceAction.ancillayService = add?.ancillayService!=null?add.ancillayService:[],
      this.datasourceAction.meal = add?.meal!=null?add.meal:[],
      this.datasourceAction.shop = add?.shop!=null?add.shop:[]
    console.log(this.datasourceAction);
    console.log(this.passengers);
    this.flight?.passengers.push(this.datasourceAction)
    let x=this.updateTable();

  }
  updateRowData(update) {
    console.log(this.editable);

console.log(update);


    let index = this.findIndex(this.flight?.passengers, this.editable?.cId);

    this.flight.passengers[index].customername = update.customername;
    this.flight.passengers[index].seatno = update.seatno;
    this.flight.passengers[index].passport = update.passport;
    this.flight.passengers[index].address = update.address;
    this.flight.passengers[index].DOB = update.DOB;
    this.flight.passengers[index].category = update.category;
    this.flight.passengers[index].ancillayService = update.ancillayService;
    this.flight.passengers[index].meal = update.meal;
    this.flight.passengers[index].shop = update.shop;
    console.log(this.flight.passengers[index]);
    
    let x=this.updateTable();

  }

  findIndex(array, id) {
    for (let index = 0; index < array?.length; index++) {
      if (id == array[index].cId) {
        return index;
      }

    }
  }
  deleteRowData(deletePassenger: UserData) {
    console.log(deletePassenger);
    let index = this.findIndex(this.flight?.passengers, this.editable?.cId);
    this.flight.passengers.splice(index,1);
    let x=this.updateTable();
   
  }

  updateTable()
  {
    this.http.put("http://localhost:3000/planes/" + this.flight?.id, this.flight).subscribe((data) => {
      this.flight = data;
      console.log(this.flight);
      this.passengers = this.flight?.passengers;


      this.dataSource = new MatTableDataSource(this.passengers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })

    this.table?.renderRows();
    
    return true;
  }
  addAncillary()
  {
    console.log(this.changeAnci);

    
    this.flight.ancillaryServices=this.flight?.ancillaryServices.split(',');
    let x=this.updateTable();
    this.changeAnci=false;


  }

  addspecialMeals()
  {
    this.flight.specialMeals=this.flight.specialMeals.split(',');
    let x=this.updateTable();
    this.changeSpecialMeals=false;
  }


  addshoppingItems(){
    this.flight.shoppingItems=this.flight.shoppingItems.split(',');
    let x=this.updateTable();
    this.changeShoppingItems=false;
  }
  

}





