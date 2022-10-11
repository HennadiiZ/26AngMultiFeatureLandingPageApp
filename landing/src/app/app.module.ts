import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationModule } from './notification/notification.module';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WeatherModule,
    NotificationModule
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

// 464. Adding Bootstrap
// 465. Styling the Forecast Component

// 466. Reminder on the Share Operator

// 467. How to Structure Services
// 468. Generating the Notification Module

// 469. Notifications Service Design
// 470. Introducing Subjects
// 471. Subject Variations
// 472. More Design on Notifications

// 473. Building a Command Structure
// 3 h 27

// 474. The Scan Operator
// 475. Scan in the Service
// 476. Fixing a Few Errors

// 477. Replay Subject in Action

// 478. A Preferred Solution

// 479. Displaying Messages
// 4 h

// 480. Automatic Timeout

// 481. Notification Styling
// 482. Clearing Messages

// 483. When to Add Notifications
// 484. Showing Success and Errors

// 485. CatchError and ThrowError
// 486. The Retry Operator
