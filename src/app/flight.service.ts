import { Injectable } from '@angular/core';
import { FlightData } from './flightData';
import { FLIGHTREC } from './mockflightData';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  getFlightRec(): FlightData[] {
  return FLIGHTREC;
}
}
