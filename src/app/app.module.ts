import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { DialogbodyComponent } from './dialogbody/dialogbody.component';

@NgModule({
  declarations: [
    AppComponent,
    GetLocationComponent,
    DialogbodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule 
  ],
  entryComponents: [DialogbodyComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
