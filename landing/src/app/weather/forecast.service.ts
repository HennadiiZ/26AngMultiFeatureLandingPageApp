import { Injectable } from '@angular/core';
import { filter, map, mergeMap, Observable, of, pluck, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OpenWeatherResponse } from '../interfaces/open-weather-responce.interface';
@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private url = 'https://api.openweathermap.org/data/2.5/'

  constructor(private http: HttpClient) {}

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
        }),
        switchMap((params)=> {
          // return this.http.get(this.url, { params: params })
          return this.http.get<OpenWeatherResponse>(this.url, { params })
        }),
        // map((response: OpenWeatherResponse)=> {
        //   response.list
        // })
        // map((response)=> {
        //   response.list
        // })


        pluck('list'),
        mergeMap(value => of(...value)),
        filter((value, index)=> index % 8 === 0 )
        // map(response => {
        //   return response.list.map((record, index) => {
        //     return { dt_txr, temp }
        //   }).filter((record, index) => index % 8 === 0)
        // })
      );
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
