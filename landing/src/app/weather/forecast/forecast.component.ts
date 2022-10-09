import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  forecastData: any = [];

  constructor(private forecastService: ForecastService) {
    // forecastService.getCurrentLocation().subscribe((coords)=> {
    //   console.log(coords);
    // });

    forecastService.getForecast().subscribe((forecastData)=> {
      console.log(forecastData);
      this.forecastData = forecastData;
    });
  }

  ngOnInit(): void {}

}
