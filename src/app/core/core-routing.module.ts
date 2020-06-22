import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

import { Role } from './_models';
import { LoginComponent } from './login';



const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },


  {
    path: 'checkin',
    loadChildren: () =>import ('../checkin/checkin.module').then(m => m.CheckinModule),
    // component: AdminComponent,
    canActivate: [AuthGuard]
},

{
  path: 'inflight',
  loadChildren: () =>import ('../inflight/inflight.module').then(m => m.InflightModule),
  // component: AdminComponent,
  canActivate: [AuthGuard]
},
  {
      path: 'admin',
      loadChildren: () =>import ('../admin/admin.module').then(m => m.AdminModule),
      // component: AdminComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
  },
  {
      path: 'login',
      component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
