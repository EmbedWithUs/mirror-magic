import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppMirror } from './app.mirror';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
    declarations: [
        AppMirror,
        ClockComponent,
        WeatherComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppMirror]
})
export class AppModule { }
