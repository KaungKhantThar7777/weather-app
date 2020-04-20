// const fetch = require('node-fetch');

// fetch("http://api.openweathermap.org/data/2.5/weather?q=mogok&appid=e0d808e3bb75f65ce0d6df3c90a058d5")
// .then(data => data.json())
// .then(obj => console.log(`It is currently ${obj.main.temp_max} temperature out there and it is ${obj.weather[0].main}`))
// .catch(e => console.log(e));



// fetch("http://api.mapbox.com/geocoding/v5/mapbox.places/Mogok.json?access_token=pk.eyJ1Ijoia2F1bmdraGFudHRoYXIiLCJhIjoiY2s5Nml1a3ByMDJtbTNmcHY0b2N3Y2dwYyJ9.atk-04sgwN7A0X4kR8xKBw&limit=1&country=mm")
// .then(data => data.json())
// .then(obj => console.log(`Place: ${obj.features[0].place_name} Lat: ${obj.features[0].center[1]} Long: ${obj.features[0].center[0]}`))
// .catch(e => console.error(e))

//links.mead.io/pic3
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();


// define paths for express config
const publicDirectoryPath = path.join(__dirname + '/public');
const viewsPath = path.join(__dirname + '/templates/views')
const partialsPath = path.join(__dirname + '/templates/partials');

// setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// setup static directory to serve
app.use(express.static(publicDirectoryPath));



app.get('/', (req,res) => {
    res.render('index',{
        title:'Weather App',
        name:'Kaung Khant Thar'
    })
})
app.get('/help', (req,res) => {
    res.render('help',{
        title:'Help',
        message:'You can get help by contacting kaung@gmail.com'
    }
    )
});

app.get('/about', (req,res) => {
    res.render('about', {
        title:'About Me!'
    })
})

app.get('/weather', (req,res) => {
    res.send({
        forecast:'cloudy',
        location:'mogok'

    })
})



app.get('*', (req,res) => {
    res.render('notFound', {
        title: 'My 404 page',
        message:'Page not found'
    })
})
app.listen(3000,() => {
    console.log(`Server is listening on port 3000`)
})