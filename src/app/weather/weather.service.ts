import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Conditions } from './conditions';
import { Forecasts } from './forecasts';

@Injectable()
export class WeatherService {

    constructor(private http: Http) {}

    key = "8ef9df6b5e4ad05b";

    getWeatherForecast(): Promise<Forecasts>{
        return this.http.get('http://api.wunderground.com/api/' + this.key + '/forecast/q/KY/Louisville.json')
            .toPromise()
            .then( response => response.json());
    }

    getCurrentWeather(): Promise<Conditions>{
        return this.http.get('http://api.wunderground.com/api/' + this.key + '/conditions/q/KY/Louisville.json')
            .toPromise()
            .then( response => response.json());
    }

    pollWeatherForecast(): Observable<Forecasts>{
        var pollingInMilliseconds = 1000 * 60 * 60 * 4; // Four Hours
        return Observable.interval(pollingInMilliseconds)
            .switchMap(() => this.http.get('http://api.wunderground.com/api/' + this.key + '/forecast/q/KY/Louisville.json'))
            .map( response => response.json());
    }

    pollCurrentWeather(): Observable<Conditions>{
        var pollingInMilliseconds = 1000 * 60 * 60 * 3; // Three Hours
        return Observable.interval(pollingInMilliseconds)
            .switchMap(() => this.http.get('http://api.wunderground.com/api/' + this.key + '/conditions/q/KY/Louisville.json'))
            .map( response => response.json());
    }

    getWeatherIcon(data): String{
        var iconString = data.current_observation.icon;
        var iconUrl;

        iconUrl = "http://icons.wxug.com/i/c/j/" + iconString + ".gif";

        return iconUrl;
    }

    getWeatherLocation(data): String{
        return data.current_observation.display_location.full;
    }

    getLongForecast(data){
        var forecastDay = data.forecast.txt_forecast.forecastday;
        var newForecastArray = [];
        for( var i = 0; i < forecastDay.length - (forecastDay.length - 2); i++){
            newForecastArray.push(forecastDay[i]);
        }
        return newForecastArray;
    }

}
