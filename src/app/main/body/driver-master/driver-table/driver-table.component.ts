import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrls: ['./driver-table.component.css']
})
export class DriverTableComponent implements OnInit {

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

  driverdetails(){
    this.route.navigate(['home/drivermaster/ddetails']);
  }
}
