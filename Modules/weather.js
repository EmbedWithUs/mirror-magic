var weather = require('weather-js');

var exports = {};


function getWeather(){
	return new Promise( function( resolve, reject ){
		var args = {
			'search': 'Louisville, KY',
			'degreeType': 'F'
		};

		weather.find(args, function(error, result) {
 
			if( error ){
				console.log(err);
				reject(error);
			} else {
				// Returns: Location, Current, Forecast
				console.log( result[0]['current']['temperature'] );
				console.log( result[0]['current']['skytext'] );
  				//console.log(JSON.stringify(result, null, 2));
				resolve(result);
			}
		});
	});
}

getWeather();

module.exports = exports;
