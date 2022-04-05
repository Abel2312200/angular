import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { ListeAvocatsComponent } from './liste-avocats/liste-avocats.component';
import { InfoAvocatsComponent } from './info-avocats/info-avocats.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeAvocatsComponent,
    InfoAvocatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
