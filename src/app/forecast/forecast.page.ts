import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: 'forecast.page.html',
  styleUrls: ['forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  forecast: any;
  cityName: string;
  selectedDay = 'all';
  availableDays: string[] = ['all'];
  displayedForecast: any[] = [];

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cityName = params['city'];
      this.getForecast();
    });
  }

  getForecast() {
    this.weatherService.getForecast(this.cityName).subscribe(forecast => {
      this.forecast = forecast;
      this.availableDays = this.getAvailableDays();
      this.onDayChange();
    });
  }

  onDayChange() {
    this.displayedForecast = this.filterForecastBySelectedDay();
    this.displayedForecast.forEach(item => {
      item.formattedDate = this.getFormattedDate(new Date(item.dt_txt));
    });
  }

  filterForecastBySelectedDay(): any[] {
    if (this.selectedDay === 'all') {
      return this.forecast.list;
    } else {
      return this.forecast.list.filter(day => this.getFormattedDate(new Date(day.dt_txt)) === this.selectedDay);
    }
  }

  getAvailableDays(): string[] {
    const availableDays: string[] = ['all'];
    for (const item of this.forecast.list) {
      const date = new Date(item.dt_txt);
      const formattedDate = this.getFormattedDate(date);
      if (!availableDays.includes(formattedDate)) {
        availableDays.push(formattedDate);
      }
    }
    return availableDays;
  }

  getFormattedDate(date: Date): string {
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  }

  selectDay(day: string) {
    this.selectedDay = day;
    this.onDayChange();
  }

}
