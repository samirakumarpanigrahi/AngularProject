import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {MatSelectModule} from '@angular/material/select';

import { AdminFlightsComponent } from './admin-flights/admin-flights.component';
import { HttpClientModule } from '@angular/common/http';

import { SelectedFlightComponent } from './selected-flight/selected-flight.component';

import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DemoMaterialModule } from '../material.module';
import { AdminFlightPipe } from './admin-flight.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogRef} from '@angular/material/dialog';
@NgModule({
  declarations: [AdminFlightsComponent, SelectedFlightComponent, EditCustomerComponent, AdminFlightPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    NgxSpinnerModule
   
  ], exports:[AdminFlightPipe],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
 ]
})
export class AdminModule { }
