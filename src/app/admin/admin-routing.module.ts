import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminFlightsComponent } from './admin-flights/admin-flights.component';
import { SelectedFlightComponent } from './selected-flight/selected-flight.component';



const routes: Routes = [
  {
    path: '',
    component: AdminFlightsComponent
  },
  { path: 'selectedFlight', component: SelectedFlightComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
