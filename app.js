const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json);

// IMPORT ROUTES
const gymsRoute = require('./routes/gyms');

app.use('/gyms', postsRoute)

// ROUTES
app.get('/', (req, res)=>{
    res.send('This is the homepage');
});

// CONNECT TO DB

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.listen(3000);