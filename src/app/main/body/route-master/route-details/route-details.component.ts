import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      var maxField = 10;
      var wrapper = $('#pickuppoints'); //Input field wrapper
      var addButton = $('#addPickup'); //Add button selector
     // var fieldHTML = '<div class="col-sm-3 form-group" style="display:-webkit-inline-box;"><label class="control-label" style="margin-right: 5px; margin-top: 5px;"></label><input type="text" class="form-control" placeholder="" autocorrect="off" autocapitalize="off" spellcheck="off" #search><a href="javascript:void(0);" class="remove_button"><i class="fa fa-trash" aria-hidden="true"></i></a></div>'; //New input field html 
      var fieldHTML = '<div class="col-sm-3 form-group" style="display:-webkit-inline-box;"><input type="text" class="form-control" name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button"><i style="font-size:18px; margin-top:50%" class="fa fa-trash" aria-hidden="true"></i></a></div>'; //New input field html 
      var x = 1; //Initial field counter is 1
    
      //Once add button is clicked
      $(addButton).click(function(){
          //Check maximum number of input fields
          $(wrapper).append(fieldHTML); 
          // if(x < maxField){ 
          //     x++; //Increment field counter
          //     //Add field html
          // }
      });
      
      //Once remove button is clicked
      $(wrapper).on('click', '.remove_button', function(e){
          e.preventDefault();
          $(this).parent('div').remove(); //Remove field html
          x--; //Decrement field counter
      });
  });
  }

  addPickup()
  {
    //$("#pickuppoints").append('<div class="col-sm-3 form-group" style="display:-webkit-inline-box;"><label class="control-label" style="margin-right: 5px; margin-top: 5px;">1</label><input type="text" class="form-control" placeholder="" autocorrect="off" autocapitalize="off" spellcheck="off" #search><i style="font-size:20px; margin-top:50%" class="fa fa-trash" aria-hidden="true"></i></div>');

   
  }
  

}
