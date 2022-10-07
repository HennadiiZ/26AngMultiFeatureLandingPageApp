import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor() {}

  getCurrentLocation() {
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position);
    //     this.position = position;
    //     getForecastData();
    //   },
    //   (err) => console.log(err)
    // )
  }
}
