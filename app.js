const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=av%2068%20av%20esperanza%20bogota',
    json: true // the response would be a json object ready to read
}, (error, response, body) => {
    console.log(error);
    console.log(body);
});
