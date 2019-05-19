import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $;

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css']
})
export class VehicleTypeComponent implements OnInit {

  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;

  oTable;
  asInitVals = [];

  editicon: any;
  mapicon: any;

  dtOptions: any;

  vehicledata: any[] = [
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Shobhit",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "Mukesh",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "fa-map-marker",
      edit : "fa-pencil-square",
    },
    {
      rootname : "1",
      rootcode : "ABCDEF",
      ownername : "nandi",
      active : "Yes",
      createdon : "HNO6KOR",
      modifiedon : "25-04-2019",
      pickuppoints : "Map",
      action : "Edit",
    }
];

  constructor() { }

  ngOnInit() {

//     this.editicon = function ( type, row ) {
//       if ( type === 'display' ) {
//           return '<i class="fa fa-pencil-square"/>';
//       }
//   };

//   this.mapicon = function (type, row ) {
//     if ( type === 'display' ) {
//         return '<i class="fa fa-map-marker"/>';
//     }
// };

    this.dtOptions = {
      data: this.vehicledata,
        columns: [
            { data: 'rootname'},
            { data: 'rootcode'},
            { data: 'ownername'},
            { data: 'active'},
            { data: 'createdon'},
            { data: 'modifiedon'},
            {
              
              data: null,
              defaultContent: '<a class="pickup"><i class="fa fa-map-marker"/></a>',
              orderable: false
          },
            {
              
              data: null,
              defaultContent: '<a class="edit"><i class="fa fa-pencil-square"/></a>',
              orderable: false
          }
        ]
    };

   
  //  $('#example tfoot th').each( function () {
  //   var title = $(this).text();
  //   $(this).html( '<input type="text" placeholder="Search" style="width:100px" />' );
  // } );

    
  // $('#example').on( 'click', 'a.edit', function (e) {
  //   var data_row = table.row(this).data();
  //   console.log('Edit' + JSON.stringify(e,null));
  // } );

  $('#BusinessUnitTable').on( 'click', 'a.pickup', function (e) {
    console.log('Pickup Points'+ JSON.stringify(e,null));
  } );

  $('#BusinessUnitTable tbody').on( 'click', 'a.edit', function () {
    var data = table.row( $(this).parents('tr') ).data();
    alert(JSON.stringify(data,null));
} );

$('#BusinessUnitTable tfoot th').each( function () {
  var title = $('#BusinessUnitTable thead th').eq($(this).index()).text();
  $(this).html('<input type="text" class="form-control" placeholder="Search" style="width:120px; text-align:center"/>' );
} );
  

    //this.dataTable = $(this.table.nativeElement);
    
    //this.dataTable.dataTable(this.dtOptions);

    var table = $('#BusinessUnitTable').DataTable(this.dtOptions);

    table.columns().every(function (){
      var datatableColumn = this;
      $(this.footer()).find('input').on('keyup change', function(){
        datatableColumn.search(this.value).draw();
      });
    });

    // $("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');

    $("#BusinessUnitTable_length" ).find('select').css( "width", "50px" );
  //   $("tfoot input").keyup( function () {
  //     /* Filter on the column (the index) of this element */
  //     table.fnFilter( this.value, $("tfoot input").index(this) );
  // } );

  //   table.columns().every( function () {
 
  //     var that = this;
      
  //     $( 'input', this.footer() ).on( 'keyup change', function () {
  //         if ( that.search() !== this.value ) {
  //             that
  //                 .search( this.value )
  //                 .draw();
  //         }
  //     } );
  // } );


  }

  add()
  {
    console.log('Add');
  }

}
