import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { FlightService } from '../flight.service';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'aad-flight-tab-one',
  templateUrl: './flight-tab-one.component.html',
  styleUrls: ['./flight-tab-one.component.scss']
})
export class FlightTabOneComponent implements OnInit {
   //@Input() name: string;
 @Output() shareDataToParent = new EventEmitter();

  fetchRecStatus;
  flightdata;
  data;

  model;
  name;
 // searchForm: FormGroup;
  submitted = false;
  public ret;


  searchForm = new FormGroup ({
    origincity: new FormControl()
  });

constructor(private formBuilder: FormBuilder, private fs: FlightService, private api: ApiService, private http: HttpClient) {
    this.createForm();

   }
    get f() { return this.searchForm.controls; }
   // get fr() { return this.searchRetForm.controls; }

  ngOnInit() {
  }


  createForm() {
    this.searchForm = this.formBuilder.group({
      origincity: ['', Validators.required],
      desinationcity: ['', Validators.required],
      departDate: ['', Validators.required],
      passan: ['', Validators.required]
   /*   rrettDate: ['', Validators.required],
      rcity: ['', Validators.required],
     rdestcity: ['', Validators.required],
     rdepartDate: ['', Validators.required],
     rpassan: ['', Validators.required]*/


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
               this.shareDataToParent.emit(this.flightdata);

        })


    }
    else if (rettDate!=undefined && name == 'Pune' && destName == 'Banglore') {
      this.ret = 'PUNBANG';
      this.api.getData(this.ret)
        .subscribe(
        restItems => {
          this.flightdata = restItems;
         this.shareDataToParent.emit(this.flightdata);

        })


    }
    else {
      this.api.restFlightsServiceData(name, destName)
        .subscribe(
        restItems => {
          this.flightdata = restItems;  
         this.shareDataToParent.emit('Rupalee');

            if(this.flightdata==""){
              this.fetchRecStatus='Flights are not available';
            }
         })
    }
  }


}
