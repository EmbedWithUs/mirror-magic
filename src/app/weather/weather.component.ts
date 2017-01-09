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
	private observation;
	private temp;

    constructor(private weatherService: WeatherService) { }

	updateWeather(response): void{
		this.observation = this.weatherService.getCurrentObservation(response);
		this.icon = this.weatherService.getWeatherIcon(response);
		this.location = this.weatherService.getWeatherLocation(response);
		this.updatedEpoch = this.weatherService.getObservationEpoch(response);
		this.temp = this.observation.feelslike_f; // Feels like
	}

	updateForecast(response): void{
		this.forecasts = this.weatherService.getLongForecast(response);
	}


    ngOnInit() {

        /**
         * Get current weather.
         */
        this.weatherService.getCurrentWeather()
            .then(response => {
                console.log("Getting initial current conditions");
				this.updateWeather(response);
            });

        this.weatherService.getWeatherForecast()
            .then(response => {
                console.log("Getting initial Forecast");
				this.updateForecast(response);
            });

        /**
         * Start Polling Services
         */
        this.weatherService.pollCurrentWeather().subscribe(response => {
            console.log("Polling Current Weather Data");
			this.updateWeather(response);
        });

        this.weatherService.pollWeatherForecast().subscribe(response => {
            console.log("Polling Forecast");
			this.updateForecast(response)
        });

    }
}
