import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { from } from 'rxjs';
import { FlightData } from './flightData';

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
  // Rest Items Service: Read all REST Items
  restFlightsServiceData(city,destcity): Observable<FlightData[]> {
    console.log('Objcject', city);
    let Params = new HttpParams().set('origincity', city)
                .set('desinationcity',destcity);


    return this.http
      .get<any[]>(API_URL + '/flights',{params:Params})
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

