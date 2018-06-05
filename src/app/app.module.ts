import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlightTabComponent } from './flight-tab/flight-tab.component';
import { FlightTabOneComponent } from './flight-tab-one/flight-tab-one.component';
import { IonRangeSliderModule } from "ng2-ion-range-slider";



   

@NgModule({
  declarations: [
    AppComponent,
    DatepickerPopupComponent,
    FlightTabComponent,
    FlightTabOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    //added here too
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    IonRangeSliderModule,
    NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
