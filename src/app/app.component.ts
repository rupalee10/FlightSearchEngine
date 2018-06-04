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
  fetchRecStatus;
  flightdata;
  data;

  model;
  name;
  searchForm: FormGroup;
  submitted = false;
  public ret;

  constructor(private formBuilder: FormBuilder, private fs: FlightService, private api: ApiService, private http: HttpClient) {
    this.createForm();
  }


    get f() { return this.searchForm.controls; }

  getFlightRec(name, destName, rettDate): void {
    this.submitted = true;
    if (rettDate!=undefined && name == 'Pune' && destName == 'Delhi') {
      this.ret = 'PUNDEL';
      this.api.getData(this.ret)
        .subscribe(
        restItems => {
          this.flightdata = restItems;
        })


    }
    else if (rettDate!=undefined && name == 'Pune' && destName == 'Banglore') {
      this.ret = 'PUNBANG';
      this.api.getData(this.ret)
        .subscribe(
        restItems => {
          this.flightdata = restItems;
        })


    }
    else {
      this.api.restFlightsServiceData(name, destName)
        .subscribe(
        restItems => {
          this.flightdata = restItems;  
            if(this.flightdata==""){
              this.fetchRecStatus='Flights are not available';
            }
         })
    }
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
