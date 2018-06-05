import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { from } from 'rxjs';
import { FlightData } from './flightData';
import { BehaviorSubject } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  
  restItems;
  public flightdata;
  constructor(private http: HttpClient) {
  }
  // Rest Items Service: Read all REST Items
  restFlightsServiceData(city, destcity): Observable<FlightData[]> {
    let Params = new HttpParams().set('origincity', city)
      .set('desinationcity', destcity);
      


    return this.http
      .get<any[]>(API_URL + '/flights', { params: Params })
      .pipe(map(data => data));


  }
  

  getData(ret): Observable<FlightData[]> {
    let Params = new HttpParams().set('ret', ret)
    return this.http
      .get<any[]>(API_URL + '/flights', { params: Params })
      .pipe(map(data => data));
  
  }

}


