import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InflightRoutingModule } from './inflight-routing.module';
import { AllFlightComponent } from './all-flight/all-flight.component';
import { CurrentFlightComponent } from './current-flight/current-flight.component';

import { ChangeServicesComponent } from './change-services/change-services.component';
import { DemoMaterialModule } from '../material.module';
import { CurrentFlightPipe } from './current-flight.pipe';

import { SeatLayOutComponent } from '../shared/seat-lay-out/seat-lay-out.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AllFlightComponent, CurrentFlightComponent, ChangeServicesComponent, CurrentFlightPipe],
  imports: [
    CommonModule,
    InflightRoutingModule,
    DemoMaterialModule,
    NgxSpinnerModule,
    SharedModule],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
      
    }
  ]
})
export class InflightModule { }
