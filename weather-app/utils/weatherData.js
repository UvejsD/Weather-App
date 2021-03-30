const request = require('request')
const constant = require('../config')
const weatherData = (address, callback) => {
    const url =  constant.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constant.openWeatherMap.SECRET_KEY
    console.log(url)
    callback(true)
}

module.exports = weatherData