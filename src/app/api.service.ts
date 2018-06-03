import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { from } from 'rxjs';
import {FlightData} from './flightData';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})


export class ApiService {
restItems;
  constructor(private http: HttpClient) {

    
   }

   
 getFlightRes() {
   
    this.restFlightsServiceData()
      .subscribe(
        restItems => {
          this.restItems = restItems;
         // console.log(this.restItems);
        }
      )
      
  }

  // Rest Items Service: Read all REST Items
  restFlightsServiceData():Observable<FlightData[]> {
    return this.http
      .get<any[]>(API_URL+ '/flights')
      .pipe(map(data => data));
  }

   /** GET heroes from the server */
  getAllFlightData() {
    alert('calling from service');
        return this.http
      .get<any[]>(API_URL + '/flights')
      .pipe(map(data => data));
  }

  }


/*getAllFlightData():Observable<FlightData[]>{
    return this.http.get(API_URL + '/flights')
       .pipe(
          .map((data: any[]) => {
            // this.products = data;
             return true;
           }), catchError( error => {
            // return throwError( 'Something went wrong!' )
           });
        )
}*/

