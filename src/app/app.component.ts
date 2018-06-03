import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { FlightService } from './flight.service';
import{ApiService} from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'aad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aad';
 // flightRes = FLIGHTREC;
  flightdata;
  data;

  model;
  searchForm :FormGroup;
  submitted = false;
  
  constructor(private formBuilder:FormBuilder,private fs:FlightService,private api:ApiService,private http: HttpClient){
        this.createForm();
}

  ngOnInit() {
   // this.http.get('http://localhost:3000/flights', { responseType: 'text' }).subscribe(res => {
   // this.data = res;
  //});

  //  this.http.get('http://localhost:3000/flights').subscribe(json => this.flightdata = json);
  }






getFlightRec(): void {
  //this.flightdata = this.fs.getFlightRec();
  alert('m in fun');
    this.api.restFlightsServiceData()
      .subscribe(
        restItems => {
          this.flightdata = restItems;
         // console.log(this.restItems);
        }
      )
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
