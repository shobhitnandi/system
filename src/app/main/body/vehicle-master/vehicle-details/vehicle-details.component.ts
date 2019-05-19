import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSelect(data: TabDirective): void {
    //console.log(data.heading);

    if(data.heading === "Vehicle Details")
    {
      this.route.navigate(['home/vehiclemaster/vdetails/vmain']);
    }
    if(data.heading === "Expiry Dates")
    {
      this.route.navigate(['home/vehiclemaster/vdetails/vexpiry']);
    }
    if(data.heading === "Document Upload")
    {
      this.route.navigate(['home/vehiclemaster/vdetails/vdocuments']);
    }

  }

}
