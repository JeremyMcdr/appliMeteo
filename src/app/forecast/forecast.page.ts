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
      forecast.list.forEach(item => {
        const date = new Date(item.dt_txt);
        item.formattedDate = this.getFormattedDate(date);
        item.formattedTime = this.getFormattedTime(date);
      });
      this.forecast = forecast;
      this.availableDays = this.getAvailableDays();
      this.displayedForecast = this.filterForecastBySelectedDay();
    });
  }


  onDayChange() {
    this.displayedForecast = this.filterForecastBySelectedDay();
  }


  filterForecastBySelectedDay(): any[] {
    if (this.selectedDay === 'all') {
      return this.forecast.list;
    } else {
      return this.forecast.list.filter(item => this.getFormattedDay(new Date(item.dt_txt)) === this.selectedDay);
    }
  }





  getFormattedTime(dateTime: Date): string {
    const options = { hour: 'numeric', minute: 'numeric', hour12: false };
    return dateTime.toLocaleTimeString('fr-FR', options);
  }

  getFormattedDay(date: Date): string {
    const options = { weekday: 'long' };
    return date.toLocaleDateString('fr-FR', options);
  }


  getAvailableDays(): string[] {
    const availableDays = [];
    for (const item of this.forecast.list) {
      const date = new Date(item.dt_txt);
      const formattedDate = this.getFormattedDay(date);
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
