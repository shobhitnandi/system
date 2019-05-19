import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {

  @ViewChild('dataTable') table : ElementRef;
  dataTable : any;

  constructor(private route: Router) { 
    $(document).ready( function () {
      
    //   var table = $('#example').DataTable({
    //     dom: 'l<"toolbar">frtip',
    //     initComplete: function(){
    //        $("div.toolbar").html('<button class="btn btn-primary" type="button" id="addBtn" style="width:100px; float:right">Add</button>');   
    //     }       
    //  });  

     $("#example_wrapper").css("margin-top", "30px");
     $("#example_filter").css("margin-right", "20px").css("margin-top", "4px");
     
  } );
  }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable();
  }

  vehicledetails(){
    this.route.navigate(['home/vehiclemaster/vdetails']);
  }
}
