const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/fake-4ru0erguer0tu340u59/38.999999,-88.888888',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(`Temperature: ${body.currently.temperature}`)
  } else {
     console.log('Unable to fetch weather');
  };
});
