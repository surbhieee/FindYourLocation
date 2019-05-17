import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetLocationHTTPServiceService {
private baseURL = "http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=";
  
constructor(private _http: HttpClient) { }

//Api call to get location coordinates
  getLocation(location){
    console.log(`${this.baseURL}${location}`);
    return this._http.get(`${this.baseURL}sensor=false?${location}`);

  }

}
