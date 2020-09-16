var express = require('express')
var bigFactorial = require('big-factorial');
const fetch = require('node-fetch')
var app = express()
const bodyParser = require('body-parser')
var cors = require('cors');
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


app.use(function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data');
    
    if (req.method == 'OPTIONS') {
    res.status(200).end();
    } else {
    next();
    }
    });

app.get('/', async function(req,res){
    let x = bigFactorial(25)
    console.log('x',x)
    // fetch('http://localhost:1997/fetchAllShop').then((result)=> {
    //     console.log('fetch output',result.json().then((newoutput)=> {
    //         console.log('newoutput ',newoutput)
    //     }))
    // })

    let result2 = await fetch('http://localhost:1997/fetchAllShop')
    let newoutput2 = await result2.json()
    console.log('newoutput2',newoutput2)
    res.send('project started'+x);
})


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



require('./routes/shoproutes')(app)





app.listen(1997, function(){
    console.log('server started at port 1997')
})