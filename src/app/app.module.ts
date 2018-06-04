import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
   

@NgModule({
  declarations: [
    AppComponent,
    DatepickerPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    //added here too
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
