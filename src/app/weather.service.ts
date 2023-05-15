import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = '13151271da94946d137492f6620eb31c';
  private API_URL = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<any> {
    // Ajoutez le paramètre 'units=metric' à l'URL pour obtenir les températures en Celsius
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.API_KEY}`);
  }

  getForecast(cityName: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${this.API_KEY}`);
  }
}
