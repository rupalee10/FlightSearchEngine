import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { FlightService } from './flight.service';

@Component({
  selector: 'aad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'aad';
 // flightRes = FLIGHTREC;
  flightdata;

  model;
  searchForm :FormGroup;
  submitted = false;
  
  constructor(private formBuilder:FormBuilder,private fs:FlightService){
        this.createForm();
}

getFlightRec(): void {
  this.flightdata = this.fs.getFlightRec();
}

  createForm(){
    this.searchForm =this.formBuilder.group({
      city:['',Validators.required],
      destcity:['',Validators.required],
      departDate:['',Validators.required],
      passan:['',Validators.required],
      rettDate:['',Validators.required]


    })

  }
}
