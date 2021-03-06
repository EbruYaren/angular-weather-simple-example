import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  constructor(
    private weatherService: WeatherService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('tr');
    translate.use('tr');
  }

  weatherResult: any;
  loading: boolean = true;

  ngOnInit(): void {
    this.weatherService.getWeather('Adana').subscribe(result => {
      this.weatherResult = result;
      console.log(this.weatherResult);
      this.loading = false;
    } );
  }
}
