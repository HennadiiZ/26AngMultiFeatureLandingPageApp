import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor() {}

  getForecast() {
    return this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            // .set('lat', '' + coords.latitude)
            .set('lat', String(coords.latitude))
            .set('lon', String(coords.longitude))
            .set('units', 'metric')
            .set('appid', 'e07899b8ac29022c34d61a58f51cd3db')
        })
      )
  }

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
