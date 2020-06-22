import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-flights',
  templateUrl: './admin-flights.component.html',
  styleUrls: ['./admin-flights.component.css']
})
export class AdminFlightsComponent implements OnInit {

  constructor(private adminService:AdminService,
    private router:Router,
    private route:ActivatedRoute,
    private spinner: NgxSpinnerService) {}
planes:any;
  ngOnInit(): void {
    this.spinner.show();
      this.adminService.get()
        .subscribe(data => {
          console.log(data);
          this.planes = data;
        })
        
 
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 600);
   
  }

  selectedFlight(data)
  {
    this.adminService.setSelectedFlight(data);
    
    this.router.navigate(['selectedFlight'], { relativeTo: this.route});
  }

}
