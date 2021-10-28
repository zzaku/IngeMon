const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config');


//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const perfRoute = require('./routes/Composants')

app.use('/performances', perfRoute);



// ROUTES
app.get('/', (req, res) => {
    res.send('we are on HOME');
});




//CONNECT TO DB
mongoose.connect(
    'mongodb+srv://Zakuu:15082000Me@ingemon.mrlrx.mongodb.net/Performances',
    { useNewUrlParser: true },
    () => console.log('connected to DB :) !')
  ) 
  

// LISTENING
app.listen(4000);