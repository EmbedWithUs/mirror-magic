import { Injectable } from '@angular/core';

@Injectable()
export class FeatureTogglesService {

    constructor() { }

    // API keys
    keys: Object = {
        "wunderground":{
            "apiKey":"0f29b1a14b9dff73",
            "ft": false
        },
        "clock":{
            "ft": true
        }
    }

    /**
     * Check the feature toggle data.
     * @param feature
     * @returns {boolean}
     */
    checkFeatureToggle(feature){
        feature = feature.toString();
        try{
            return this.keys[feature]['ft'];
        } catch(e){
            console.error("Error: Feature Toggle Not Found");
            console.error(e);
            return false;
        }
    }

    /**
     * Return all data from feature
     * @param feature
     * @returns {any}
     */
    getFeatureData(feature){
        feature = feature.toString();
        return this.keys[feature];
    }

}
