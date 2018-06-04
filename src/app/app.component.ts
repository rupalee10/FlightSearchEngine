import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from './flight.service';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import {FlightTabOneComponent} from './flight-tab-one/flight-tab-one.component';

@Component({
  selector: 'aad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aad';
 
  constructor() {
  
  }


shareDataToParent(sharedText){
  console.log('imput data'+sharedText);
}




 
}
