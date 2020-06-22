import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SeatLayOutComponent } from './seat-lay-out/seat-lay-out.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { DemoMaterialModule } from '../material.module';

@NgModule({
  declarations: [SeatLayOutComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatGridListModule,
    DemoMaterialModule
  ],
  exports:[SeatLayOutComponent]
})
export class SharedModule { }
