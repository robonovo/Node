const request = require('request');

let getWeather = (lat, lon, callback) => {
  request({
    url: `https://api.darksky.net/forecast/fake45353rtet5434563rterter/${lat},${lon}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
       callback('Unable to fetch weather');
    };
  });
};

module.exports.getWeather = getWeather;
