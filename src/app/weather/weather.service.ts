import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Conditions } from './conditions';
import { Forecasts } from './forecasts';

@Injectable()
export class WeatherService {

    constructor(private http: Http) {}

    private key = "8ef9df6b5e4ad05b";

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
        var pollingInMilliseconds = 1000 * 60 * 60 * 1; // Three Hours
        return Observable.interval(pollingInMilliseconds)
            .switchMap(() => this.http.get('http://api.wunderground.com/api/' + this.key + '/conditions/q/KY/Louisville.json'))
            .map( response => response.json());
    }

    getWeatherIcon(data): String{
        var iconString = data.current_observation.icon;
        var iconUrl: string;
        var iconClass: string = "fa ";

        iconUrl = "http://icons.wxug.com/i/c/i/" + iconString + ".gif";

        switch(iconString){
            case "clear":
            case "mostlysunny":
            case "nt_clear":
            case "nt_mostlysunny":
            case "nt_partlycloudy-1":
            case "nt_partlycloudy":
            case "nt_partlysunny":
            case "nt_sunny":
            case "partlycloudy-1":
            case "partlycloudy":
            case "partlysunny":
            case "sunny":
                iconClass += "icon-sunny";
                break;
            case "chancerain":
            case "nt_chancerain":
            case "nt_rain":
            case "rain":
                iconClass += "fa-umbrella";
                break;
            case "nt_chancetstorms-1":
            case "nt_chancetstorms":
            case "chancetstorms-1":
            case "chancetstorms":
            case "nt_tstorms-1":
            case "nt_tstorms-2":
            case "nt_tstorms":
            case "raintstorms-1":
            case "raintstorms-2":
            case "raintstorms":
                iconClass += "fa-bolt"
                break;
            case "chanceflurries":
            case "chancesleet-1":
            case "chancesleet":
            case "chancesnow":
            case "flurries":
            case "ng_chanceflurries":
            case "ng_chancesleet-1":
            case "ng_chancesleet":
            case "ng_chancesnow":
            case "ng_flurries":
            case "ng_sleet":
            case "ng_sleet-1":
            case "ng_snow":
            case "sleet-1":
            case "sleet":
            case "snow":
                iconClass += "fa-snowflake-o";
                break;
            case "cloudy-1":
            case "cloudy":
            case "fog":
            case "hazy":
            case "mostlycloudy":
            case "nt_cloudy-1":
            case "nt_cloudy":
            case "nt_fog":
            case "nt_hazy":
            case "nt_mostlycloudy":
                iconClass += "fa-cloud";
                break;
            default:
                iconClass += "fa-rocket";
        }

        return iconClass;
    }

    getWeatherLocation(data): String{
        return data.current_observation.display_location.full;
    }

    getLongForecast(data){
        var forecastDay = data.forecast.txt_forecast.forecastday;
        var newForecastArray = [];
        for( var i = 0; i < forecastDay.length - (forecastDay.length - 1); i++){
            newForecastArray.push(forecastDay[i]);
        }
        return newForecastArray;
    }

}
