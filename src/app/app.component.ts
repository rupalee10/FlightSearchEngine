import { Component, OnInit,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from './flight.service';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import {FlightTabOneComponent} from './flight-tab-one/flight-tab-one.component';
import {FlightTabComponent} from './flight-tab/flight-tab.component';
import { FormsModule } from '@angular/forms';
import {IonRangeSliderComponent} from "ng2-ion-range-slider";






@Component({
  selector: 'aad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 // directives: ['FlightTabOneComponent']

})
export class AppComponent {
    @ViewChild('sliderElement') sliderElement:IonRangeSliderComponent;
      simpleSlider = {name: "Simple Slider", onUpdate: undefined, onFinish: undefined};
  advancedSlider = {name: "Advanced Slider", onUpdate: undefined, onFinish: undefined};


  title = 'aad';
 
  constructor(private api: ApiService) {
 //   this.flightdata = this.api.flightdata;
  }
    myCount;
    flightdata;

  




shareDataToParent(sharedText: any){
 this.flightdata = sharedText;
}
    update(slider, event) {
    console.log("Slider updated: " + slider.name);
    slider.onUpdate = event;
  }

  finish(slider, event) {
    console.log("Slider finished: " + slider.name);
    slider.onFinish = event;
  }

  setAdvancedSliderTo(from, to) {
    this.sliderElement.update({from: from, to:to});
  }








 
}
