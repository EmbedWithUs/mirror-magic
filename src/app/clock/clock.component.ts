import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit{

    // Setup time at first.
    time: Object = new Date();

    // Check the time
    // returns nothing.
    checkTime(): void{
        this.time = new Date();
    }

    // When component loads.
    ngOnInit(): void {
        console.log("Clock Module Initialized");
        this.checkTime();

        setInterval(() => {
            this.checkTime();
        }, 1000 * 60); // Every Minute
    }
}
