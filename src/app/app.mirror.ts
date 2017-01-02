import { Component } from '@angular/core';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.mirror.html',
  styleUrls: ['./app.mirror.scss']
})
export class AppMirror {
  title = 'Mirror has loaded!';
}
