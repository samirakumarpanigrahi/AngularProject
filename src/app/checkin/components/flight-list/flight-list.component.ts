import { Component, OnInit } from '@angular/core';
import { CheckinService } from '../../checkin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Flight } from 'src/app/core/_models/flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor(private service: CheckinService, private router: Router,
    private route: ActivatedRoute, private spinner: NgxSpinnerService) { }
  planes: Flight[];
  ngOnInit() {
    this.spinner.show();
    this.service.get()
      .subscribe(data => {
        this.planes = data;
      })

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 600);

  }


  selectedFlight(data: Flight) {
    this.service.setSelectedFlight(data);
    this.router.navigate(['selectedFlight'], { relativeTo: this.route });
  }

}
