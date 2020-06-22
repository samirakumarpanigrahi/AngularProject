import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { InflightService } from '../inflight.service';
import { MatDialog } from '@angular/material/dialog';
import {ChangeServicesComponent} from '../change-services/change-services.component'
import { HttpClient } from '@angular/common/http';


export interface UserData {
  cId: number,
  customername: string,
  seatno: number,
  checkenin: boolean,
  passport: string,
  address: string,
  DOB: string,
  category: string,
  meal:string,
  ancillayService: string[],
  shop:string[]

}

@Component({
  selector: 'app-current-flight',
  templateUrl: './current-flight.component.html',
  styleUrls: ['./current-flight.component.css']
})
export class CurrentFlightComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute,
    private service:InflightService,
    public dialog: MatDialog,
    private http: HttpClient) { }




    passengers: UserData[] = [];
    flight:any;
    editable: any;
    mealMap="mealMap";


  displayedColumns: string[] = ['cId', 'customername', 'seatno', 'checkenin', 'passport', 'address', 'DOB', 'category', 'ancillayService','meal','shop','action'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  ngOnInit(): void {


    this.flight = this.service.getSelectedFlight();
    console.log(this.flight);
    this.passengers = this.flight?.passengers;
    console.log(this.passengers);
    this.dataSource = new MatTableDataSource(this.passengers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event?.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getSelected(event){
    console.log(event)
  }
  seatsLayout:mealSeatsLayout= {
    totalRows:9,
    seatsPerRow:6,
    seatNaming:'rowType',
    booked:[]
  }



  openDialog(action,obj) {
    console.log(action);
    console.log(obj);
    
    
    obj.action = action;
    this.editable = obj;
    const dialogRef = this.dialog.open(ChangeServicesComponent, {
      width: '250px',
     
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Ancillay'){
        this.changeAncillary(result.data);
      }else if(result.event == 'Meal'){
        this.changeMeal(result.data);
      }else if(result.event == 'Shop'){
        this.changeShop(result.data);
      }
    });
  }
  changeShop(data: any) {
    console.log(data);
    let index = this.findIndex(this.flight?.passengers, this.editable?.cId);

    this.flight.passengers[index].shop=data.shop;
   
    let x=this.updateTable();
    
  }
  changeAncillary(row_obj)
  {
    console.log(row_obj);
    let index = this.findIndex(this.flight.passengers, this.editable.cId);

    this.flight.passengers[index].ancillayService=row_obj.ancillayService;
   
    let x=this.updateTable();
    
  }
  changeMeal(row_obj)
  {
    console.log(row_obj);
    let index = this.findIndex(this.flight?.passengers, this.editable?.cId);

    this.flight.passengers[index].meal = row_obj.meal;
   
    let x=this.updateTable();
    
  }
  findIndex(array, id) {
    for (let index = 0; index < array?.length; index++) {
      if (id == array[index].cId) {
        return index;
      }

    }
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




}
export class mealSeatsLayout{
  totalRows: Number;
  seatsPerRow: Number;
  seatNaming: String;
  booked:String[]
}
