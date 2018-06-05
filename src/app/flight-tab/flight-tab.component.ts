import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { FlightService } from '../flight.service';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'aad-flight-tab',
  templateUrl: './flight-tab.component.html',
  styleUrls: ['./flight-tab.component.scss']
})
export class FlightTabComponent implements OnInit {
   @Output() shareDataToParent = new EventEmitter<any>();
 fetchRecStatus;
  flightdata;
  data;

  model;
  name;
 // searchForm: FormGroup;
  submitted = false;
  public ret;
    searchRetForm = new FormGroup ({
    origincity: new FormControl()
  });


  constructor(private formBuilder: FormBuilder, private fs: FlightService, private api: ApiService, private http: HttpClient) {
    this.createForm();

   }
   // get f() { return this.searchRetForm.controls; }
    get fr() { return this.searchRetForm.controls; }

    ngOnInit() {
    }
    createForm() {
    this.searchRetForm = this.formBuilder.group({
      origincity: ['', Validators.required],
      desinationcity: ['', Validators.required],
      departDate: ['', Validators.required],
      passan: ['', Validators.required],
     rettDate:['', Validators.required]

    })

  }
    getFlightRec(name, destName, rettDate): void {
    this.submitted = true;
    if (rettDate!=undefined && name == 'Pune' && destName == 'Delhi') {
      this.ret = 'PUNDEL';
      this.api.getData(this.ret)
        .subscribe(
        restItems => {
          this.flightdata = restItems;
          this.shareDataToParent.emit(restItems);

        })


    }
    else if (rettDate!=undefined && name == 'Pune' && destName == 'Banglore') {
      this.ret = 'PUNBANG';
      this.api.getData(this.ret)
        .subscribe(
        restItems => {
          this.flightdata = restItems;
          this.shareDataToParent.emit(restItems);

        })


    }
    else {
      this.api.restFlightsServiceData(name, destName)
        .subscribe(
        restItems => {
          this.flightdata = restItems;  
          this.shareDataToParent.emit(restItems);

            if(this.flightdata==""){
              this.fetchRecStatus='Flights are not available';
            }
         })
    }
  }


}
