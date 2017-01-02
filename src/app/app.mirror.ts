import { Component } from '@angular/core';
import { FeatureTogglesService } from './feature-toggles.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.mirror.html',
    styleUrls: ['./app.mirror.scss'],
    providers: [FeatureTogglesService]
})
export class AppMirror {
    constructor( private featureToggleService: FeatureTogglesService){}
    ft = this.featureToggleService;
}
