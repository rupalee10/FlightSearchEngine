import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from './flight.service';
import { ApiService } from './api.service';
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
  name;
  searchForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private fs: FlightService, private api: ApiService, private http: HttpClient) {
    this.createForm();
  }
    


   getFlightRec(name,destName): void {
    //this.flightdata = this.fs.getFlightRec();
   // alert(origincity);
    this.api.restFlightsServiceData(name,destName)
      .subscribe(
      restItems => {
        this.flightdata = restItems;
        // console.log(this.restItems);
      }
      )
  }

  createForm() {

    this.searchForm = this.formBuilder.group({
      city: ['', Validators.required],
      destcity: ['', Validators.required],
      departDate: ['', Validators.required],
      passan: ['', Validators.required],
      rettDate: ['', Validators.required]


    })

  }
}
