import { Injectable } from '@angular/core';
import { filter, map, mergeMap, Observable, of, pluck, switchMap, toArray, share, tap, catchError, throwError, retry } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OpenWeatherResponse } from '../interfaces/open-weather-responce.interface';
import { NotificationsService } from '../notification/notifications.service';
@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private url = 'https://api.openweathermap.org/data/2.5/'

  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) {}

  getForecast() {
    return this.getCurrentLocation()
      .pipe(
        map(coords => {
          return new HttpParams()
            .set('lat', String(coords.latitude))
            .set('lon', String(coords.longitude))
            .set('units', 'metric')
            .set('appid', 'e07899b8ac29022c34d61a58f51cd3db')
        }),
        switchMap((params)=> {
          return this.http.get<OpenWeatherResponse>(this.url, { params })
        }),
        pluck('list'),
        mergeMap(value => of(...value)),
        filter((value, index)=> index % 8 === 0 ),
        map(value => {
          return {
            dateString: value.dt_txt,
            temp: value.main.temp
          }
        }),
        toArray(),
        share()
      );
  }

  getCurrentLocation() {
    return new Observable<any>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      )
    }).pipe(
      // retry(1),
      tap(() => {
        this.notificationsService.addSuccess('Got your location');
      }),
      catchError((err) => {
        this.notificationsService.addError('Failed to get your location');
        // the same:

        return new Observable(observer => {
          observer.error(err);
        })

        // shortcut:
        // return throwError(err);
      })
    );
  }
}
