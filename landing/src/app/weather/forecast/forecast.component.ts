import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  // forecastData: any = [];
  // forecast$!: Observable<any>
  // forecast$!: Observable<{dateString: string; temp: number}[]>;
  forecast$!: any;

  constructor(private forecastService: ForecastService) {
    // forecastService.getCurrentLocation().subscribe((coords)=> {
    //   console.log(coords);
    // });

    // forecastService.getForecast().subscribe((forecastData)=> {
    //   console.log(forecastData);
    //   this.forecastData = forecastData;
    // });

    this.forecast$ = forecastService.getForecast();
  }

  ngOnInit(): void {}

}
