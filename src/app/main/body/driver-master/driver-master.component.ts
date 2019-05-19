import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-master',
  templateUrl: './driver-master.component.html',
  styleUrls: ['./driver-master.component.css']
})
export class DriverMasterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  value: string;
  onSelect(data: TabDirective): void {
    //console.log(data.heading);

    if(data.heading === "Documents")
    {
      this.route.navigate(['home/drivermaster/ddetails/documents']);
    }
    if(data.heading === "Main Details")
    {
      this.route.navigate(['home/drivermaster/ddetails/main']);
    }

  }

  maindetails()
  {
    
  }

  maindocuments()
  {
    console.log('World');
  }

}
