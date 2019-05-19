import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/body/dashboard/dashboard.component';
import { RouteMasterComponent } from './main/body/route-master/route-master.component';
import { DriverMasterComponent } from './main/body/driver-master/driver-master.component';
import { DriverDetailsComponent } from './main/body/driver-master/driver-details/driver-details.component';
import { DriverMainDetailsComponent } from './main/body/driver-master/driver-details/driver-main-details/driver-main-details.component';
import { DriverMainDocumentsComponent } from './main/body/driver-master/driver-details/driver-main-documents/driver-main-documents.component';
import { DriverTableComponent } from './main/body/driver-master/driver-table/driver-table.component';
import { RouteDetailsComponent } from './main/body/route-master/route-details/route-details.component';
import { RouteTableComponent } from './main/body/route-master/route-table/route-table.component';
import { VehicleMasterComponent } from './main/body/vehicle-master/vehicle-master.component';
import { VehicleTableComponent } from './main/body/vehicle-master/vehicle-table/vehicle-table.component';
import { VehicleDetailsComponent } from './main/body/vehicle-master/vehicle-details/vehicle-details.component';
import { VehicleMainDetailsComponent } from './main/body/vehicle-master/vehicle-details/vehicle-main-details/vehicle-main-details.component';
import { VehicleExpiryComponent } from './main/body/vehicle-master/vehicle-details/vehicle-expiry/vehicle-expiry.component';
import { VehicleDocumentsComponent } from './main/body/vehicle-master/vehicle-details/vehicle-documents/vehicle-documents.component';
import { VehicleTypeComponent } from './main/body/vehicle-type/vehicle-type.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: MainComponent, canActivate: [AuthGuard], children: [
      {path: 'dashboard', component: DashboardComponent}, 
      {path: 'vehicletype', component: VehicleTypeComponent}, 
      { path: 'routermaster', component: RouteMasterComponent, children:
        [
          { path: 'rdetails', component: RouteDetailsComponent },
          { path: 'rtable', component: RouteTableComponent },
          { path: '', redirectTo: '/home/routermaster/rtable', pathMatch: 'full' }
        ] 
      },
      { path: 'drivermaster', component: DriverMasterComponent, children:
        [
          { path: 'ddetails', component: DriverDetailsComponent, children:
            [
              { path: 'main', component: DriverMainDetailsComponent },
              { path: 'documents', component: DriverMainDocumentsComponent },
              { path: '', redirectTo: '/home/drivermaster/ddetails/main', pathMatch: 'full' }
            ] 
        },
          { path: 'dtable', component: DriverTableComponent },
          { path: '', redirectTo: '/home/drivermaster/dtable', pathMatch: 'full' }
        ] 
      },
      { path: 'vehiclemaster', component: VehicleMasterComponent, children:
        [
          { path: 'vdetails', component: VehicleDetailsComponent, children: 
            [
              { path: 'vmain', component: VehicleMainDetailsComponent },
              { path: 'vexpiry', component: VehicleExpiryComponent },
              { path: 'vdocuments', component: VehicleDocumentsComponent },
              { path: '', redirectTo: '/home/vehiclemaster/vdetails/vmain', pathMatch: 'full' }
            ]
          },
          { path: 'vtable', component: VehicleTableComponent },
          { path: '', redirectTo: '/home/vehiclemaster/vtable', pathMatch: 'full' }
        ] 
      },
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
