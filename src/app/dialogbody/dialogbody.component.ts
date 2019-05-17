import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialogbody',
  templateUrl: './dialogbody.component.html',
  styleUrls: ['./dialogbody.component.css']
})
export class DialogbodyComponent implements OnInit {
  title;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogbodyComponent> ) {
    this.title = data.dataKey;
   }  

  close() {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}
