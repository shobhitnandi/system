import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { BodyComponent } from './main/body/body.component';
import { DashboardComponent } from './main/body/dashboard/dashboard.component';
import { LeftnavComponent } from './main/body/leftnav/leftnav.component';
import { DataTablesModule } from 'angular-datatables';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DriverMasterComponent } from './main/body/driver-master/driver-master.component';
import { RouteMasterComponent } from './main/body/route-master/route-master.component';
import { DriverMainDetailsComponent } from './main/body/driver-master/driver-details/driver-main-details/driver-main-details.component';
import { DriverMainDocumentsComponent } from './main/body/driver-master/driver-details/driver-main-documents/driver-main-documents.component';
import { RouteTableComponent } from './main/body/route-master/route-table/route-table.component';
import { RouteDetailsComponent } from './main/body/route-master/route-details/route-details.component';
import { DriverTableComponent } from './main/body/driver-master/driver-table/driver-table.component';
import { DriverDetailsComponent } from './main/body/driver-master/driver-details/driver-details.component';
import { VehicleMasterComponent } from './main/body/vehicle-master/vehicle-master.component';
import { VehicleTableComponent } from './main/body/vehicle-master/vehicle-table/vehicle-table.component';
import { VehicleDetailsComponent } from './main/body/vehicle-master/vehicle-details/vehicle-details.component';
import { VehicleMainDetailsComponent } from './main/body/vehicle-master/vehicle-details/vehicle-main-details/vehicle-main-details.component';
import { VehicleExpiryComponent } from './main/body/vehicle-master/vehicle-details/vehicle-expiry/vehicle-expiry.component';
import { VehicleDocumentsComponent } from './main/body/vehicle-master/vehicle-details/vehicle-documents/vehicle-documents.component';
import { VehicleTypeComponent } from './main/body/vehicle-type/vehicle-type.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DashboardComponent,
    RouteTableComponent,
    RouteDetailsComponent,
    LeftnavComponent,
    DriverTableComponent,
    DriverDetailsComponent,
    DriverMasterComponent,
    RouteMasterComponent,
    DriverMainDetailsComponent,
    DriverMainDocumentsComponent,
    VehicleMasterComponent,
    VehicleTableComponent,
    VehicleDetailsComponent,
    VehicleMainDetailsComponent,
    VehicleExpiryComponent,
    VehicleDocumentsComponent,
    VehicleTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
