const request = require("request")
const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))
// set views directory
app.set('view engine', 'hbs')
const viewsDirectory = path.join(__dirname, "../temple/views")
app.set("views", viewsDirectory)
// set partials directory
const partialsPath = path.join(__dirname, "../temple/partials")
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: "HOME",
        desc: "this is home page"
    })
})
app.get('/checkWeather', (req, res) => {
    // to get country from input home 
    const country = req.query.country;
    const url = `https://api.weatherapi.com/v1/current.json?key=1231891180c745219d283531232907&q=${country}&aqi=no`;
  
    request({url , json: true} , (error,  response) => {
      if (error) {
        res.render('error', { message: 'Error fetching weather data.' });
      } else if(response.body.error){
        res.render('error', { message: response.body.error.message });
      } else {
        res.render('checkWeather', {
          title: 'Check Weather',
          country: response.body.location.name,
          latitude: response.body.location.lat ,
          longitude: response.body.location.lon ,
          weather: response.body.current.condition.text ,
          temperature:response.body.current.temp_c ,
          icon: response.body.current.condition.icon ,
        });
      }
    });
  });



  module.exports = app
