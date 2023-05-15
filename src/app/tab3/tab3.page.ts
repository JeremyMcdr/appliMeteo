import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    weather: any;
    cityName = '';

    constructor(private weatherService: WeatherService, private navCtrl: NavController) { }

    ngOnInit() { }

    getWeather() {
        this.weatherService.getWeather(this.cityName).subscribe(weather => {
            this.weather = weather;
        });
    }
}
