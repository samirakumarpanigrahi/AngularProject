import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckinRoutingModule } from './checkin-routing.module';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { DisplayFlightComponent } from './components/display-flight/display-flight.component';

import { DemoMaterialModule } from '../material.module';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

import { NextFlightPipe } from './next-flight.pipe';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [FlightListComponent, DisplayFlightComponent, PassengerDetailComponent,  NextFlightPipe],
  imports: [
    CommonModule,
    CheckinRoutingModule,
    DemoMaterialModule,
    SharedModule,
    NgxSpinnerModule
  ],exports:[NextFlightPipe] 
})
export class CheckinModule { }
