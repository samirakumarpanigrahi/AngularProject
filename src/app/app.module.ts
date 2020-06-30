import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material.module';
import { CheckinModule } from './checkin/checkin.module';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatDialogRef} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CheckinModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    SharedModule,
    NgxSpinnerModule,
    MatGridListModule,
    ToastrModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
