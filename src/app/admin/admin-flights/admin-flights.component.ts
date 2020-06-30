import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Flight } from 'src/app/core/_models/flight';

@Component({
  selector: 'app-admin-flights',
  templateUrl: './admin-flights.component.html',
  styleUrls: ['./admin-flights.component.css']
})
export class AdminFlightsComponent implements OnInit {

  constructor(private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }
  flight: Flight[];
  ngOnInit(): void {
    this.spinner.show();
    this.adminService.get()
      .subscribe(data => {
        this.flight = data;
      })


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 600);

  }

  selectedFlight(data: Flight) {
    this.adminService.setSelectedFlight(data);
    this.router.navigate(['selectedFlight'], { relativeTo: this.route });
  }

}
