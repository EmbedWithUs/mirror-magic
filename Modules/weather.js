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
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
}

module.exports = exports;
