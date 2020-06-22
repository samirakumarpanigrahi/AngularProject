import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFlightComponent } from './all-flight/all-flight.component';
import { CurrentFlightComponent } from './current-flight/current-flight.component';
import { ChangeServicesComponent } from './change-services/change-services.component';


const routes: Routes = [
  {path:"",component:AllFlightComponent},
  {path:'selectedFlight',component:CurrentFlightComponent},
  {path:'selectedFlight/passenger',component:ChangeServicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InflightRoutingModule { }
