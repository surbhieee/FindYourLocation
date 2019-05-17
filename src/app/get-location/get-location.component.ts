import { Component, OnInit } from '@angular/core';
import { GetLocationHTTPServiceService } from '../get-location-httpservice.service';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import {DialogbodyComponent} from '../dialogbody/dialogbody.component';


@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})

export class GetLocationComponent implements OnInit {
  //component model
  showLocation
  location;
  longitude;
  latitude;

  constructor(private _getLocationHTTPServiceService: GetLocationHTTPServiceService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  //on location submit function
  onSubmit(location){
    this.getLocation(location);    
  }  

  //api request to get the location co-ordinates
  getLocation(event){
    let details = this._getLocationHTTPServiceService.getLocation(event);
    details.subscribe(
      data=> {
        this.location= data["results"];
        console.log(this.location);
        if(this.location.length === 0){
          this.openDialogue("Not a valid city");
        }else{
        this.updateLocation(event);
        }
      },
      error => {
        console.log("Not a valid City");
      }
    )
  }

  //update the received coordinates on view
  updateLocation(location){
    this.longitude = this.location[0].geometry.location.lng;
    this.latitude = this.location[0].geometry.location.lat;
    this.location = location;
  }

  //open the dialog on invalid entry of city
  openDialogue(title) {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.data= { dataKey : title };
            this.dialog.open(DialogbodyComponent, dialogConfig);
  }

  //check the changing input forcefully
    ngDoCheck() {
      if (this.location === null || this.location === "") {
        this.longitude = "";
        this.latitude = "";
    }
    }

}
