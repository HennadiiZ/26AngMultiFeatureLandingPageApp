import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WeatherModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// 444. Generating Modules
// 445. Module Properties
// 446. Connecting Modules

// 447. Examining the API
  // - https://home.openweathermap.org/api_keys
  // e07899b8ac29022c34d61a58f51cd3db (api_keys)
// 448. Reading the Users Location

  // navigator.geolocation.getCurrentPosition(
  //   (position) => console.log(position),
  //   (err) => console.log(err)
  // )

  // Position {coords: Coordinates, timestamp: 1577380482227}
  // GeolocationPositionError {code: 1, message: 'User denied Geolocation'}
  // GeolocationPositionError {code: 1, message: 'User has not allowed access to system location.'}
// 449. The Angular Way

// 450. Geolocation in an Observable
// 451. Connecting the Service to a Component

// 452. Transforming Coordinates to Query Params

// 453. SwitchMap vs MergeMap
// 454. But Why SwitchMap?
// 455. Making a Request

// 456. Further Processing
// 457. Generics on HTTP Requests

// 458. Filter, MergeMap, Pluck Operators
// 459. Map and toArray Operators

// 460. Accessing Data in the Template
 // 2 h

// 461. Pipes Overview
// 462. Data Pipes
// 463. The Async Pipe
