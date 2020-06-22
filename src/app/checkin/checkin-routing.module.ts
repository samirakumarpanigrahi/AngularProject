import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { DisplayFlightComponent } from './components/display-flight/display-flight.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';


const routes: Routes = [
  {path:"",component:FlightListComponent},
  {path:'selectedFlight',component:DisplayFlightComponent},
  {path:'selectedFlight/passenger',component:PassengerDetailComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckinRoutingModule { }
