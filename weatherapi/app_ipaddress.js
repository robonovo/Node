const YARGS = require('yargs')
const AXIOS = require('axios')
const PUBLIC_IP = require('public-ip')
const GEO_IP = require('geoip-lite')

const ARGV = YARGS
  .options({
    address: {
      demandOption: false,
      alias: 'a',
      describe: 'Address to get weather for',
      string: true
    }
  })
  .command('$0', 'the default command', () => {}, (argv) => {
    PUBLIC_IP.v4()
      .then(ip => {
        const IP_ADDRESS = encodeURIComponent(GEO_IP.lookup(ip).city)
        return GET_WEATHER(IP_ADDRESS)
      })
      .catch(error => console.log(error))
  })
  .help()
  .argv

if (ARGV.address) {
  GET_WEATHER(encodeURIComponent(ARGV.address))
}

function convertFtoC (temp) {
  return parseFloat((temp - 32) / 1.8).toFixed(2)
}

let addressObj = {
  address: String,
  lat: Number,
  lng: Number
}

const KEY_GEOCODE = '&key=fake-wetrwtr0-09rtgjie0tu0egers'
const URL_BASE_GEOCODE = 'https://maps.googleapis.com/maps/api/geocode/json?address='
const KEY_FORECAST = 'fake-egre0t93urt4terget'
const URL_BASE_FORECAST = 'https://api.darksky.net/forecast/'

const GET_WEATHER = (myLocation) => {
  AXIOS.get(`${URL_BASE_GEOCODE}${myLocation}${KEY_GEOCODE}`)
  .then(response => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find address.')
    }

    addressObj.address = response.data.results[0].formatted_address
    addressObj.lat = response.data.results[0].geometry.location.lat
    addressObj.lng = response.data.results[0].geometry.location.lng

    return AXIOS.get(`${URL_BASE_FORECAST}${KEY_FORECAST}/${addressObj.lat},${addressObj.lng }`)
  })
  .then(response => {
    console.log(`
      Weather for: ${addressObj.address}
      It is ${response.data.currently.summary.toLowerCase()}.
      The temperature is ${convertFtoC(response.data.currently.temperature)}°C.
      It feels like ${convertFtoC(response.data.currently.apparentTemperature)}°C.
    `)
  })
  .catch(error => {
    if (error.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.')
    } else {
      console.log(error.message)
    }
  })
}
