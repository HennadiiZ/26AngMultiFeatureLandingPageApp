import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

    // return new Observable<Coordinates>((observer) => {

    return new Observable<any>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      )
    });
  }
}
