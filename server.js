
// Setup empty JS object to act as endpoint for all routes
// projectData = {};
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch')

// Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server

const port = 5001;
const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`)
});

// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// app.get('/all', function (req, res) {
//     res.send(data);

// })



// // Post Route

// app.post('/', function (req, res) {
//     res.send('post received');
// });


// const data = [];
// app.post('/add', function (req, res) {

//     data.push(req.body);
//     console.log(data);
// })




//new code

// app.post('/api', (req, res) => {
//     console.log(req.body)
//     const data = req.body
//     res.json({
//         status: 'success',
//         zipcode: data.enteredZip
//     })
// })

app.get('/weather/:enteredZip', async (request, response) => {
    const enteredZip = request.params.enteredZip
    const key = process.env.WEATHER_API_KEY
    console.log(key)
    console.log(enteredZip)
    const api_url = `https://api.openweathermap.org/data/2.5/weather?zip=${enteredZip}&appid=${key}&units=imperial`
    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json()
    response.json(json)
})



