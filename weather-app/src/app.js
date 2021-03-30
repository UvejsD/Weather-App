//Konfigurimi i app-it
//Cd- eshte me hi  ne folder 
//cd.. eshte me dal praj folderit
const express = require('express')
const path = require('path')
const hbs = require('hbs')
//const request = require('request')
const weatherData = require('../utils/weatherData')

const app = express() //server



// Thirrja e path-it (Define path)
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partial')


// Setup per perdorimin e file-ve
app.set('view engine', 'hbs')
app.set('views', viewsPath) //file-at dinamik
hbs.registerPartials(partialsPath)


// Setup-i per file-at statik

app.use(express.static(publicDirectoryPath))




//get Home Page ; url/ localhost:3000
app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Uvejs Danjolli"
    })
})


// url: localhost:3000/help
app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Uvejs Danjolli",
        helpText: "Ask of our agent for help"
    })
})




app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        name: "Uvejs Danjolli",
        img: "/images/foto.png"
    })
})




// app.get('/products', (req, res)=>{
//     if(!req.query.search){
//         return res.send ({
//             error: " You must choose a product"
//         })
//     }

//     console.log(req.query.search)
//     res.send({

//         //key  :      value
//         products:['pc', 'maus']
//     })
// })





// app.get('/weather', (req, res) => {

//     if (!req.query.address) {
//         return res.send({
//             error: "You must choose a location"
//         })
//     }

//     console.log(req.query.address)

//     res.send({

//         forecast: 'Its snowing',
//         location: 'Kosovo',
//         address: req.query.address 

//     })
// })






// localhost:3000/weather?address=Prizren
app.get('/weather', (req, res) => {
    const address = req.query.address
    weatherData(address, (result) => { 
        console.log(result)
    })
})




app.get('*', (req, res) => {
    res.render('404', {})
})







app.listen(3000, () => {
    console.log('Serveri osht tu ngu')
})
