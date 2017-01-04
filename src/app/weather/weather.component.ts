import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
    providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
    private icon;
    private location;
    private forecasts;
	private updatedEpoch;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {

        /**
         * Get current weather.
         */
        this.weatherService.getCurrentWeather()
            .then(response => {
                console.log("Getting initial current conditions");
				console.log(response);
                this.icon = this.weatherService.getWeatherIcon(response);
                this.location = this.weatherService.getWeatherLocation(response);
				this.updatedEpoch = this.weatherService.getObservationEpoch(response);
            });

        this.weatherService.getWeatherForecast()
            .then(response => {
                console.log("Getting initial Forecast");
                this.forecasts = this.weatherService.getLongForecast(response);
            });

        /**
         * Start Polling Services
         */
        this.weatherService.pollCurrentWeather().subscribe(response => {
            console.log("Polling Current Weather Data");
            this.icon = this.weatherService.getWeatherIcon(response);
            this.location = this.weatherService.getWeatherLocation(response);
        });

        this.weatherService.pollWeatherForecast().subscribe(response => {
            console.log("Polling Forecast");
            this.forecasts = this.weatherService.getLongForecast(response);
        });

    }
}
