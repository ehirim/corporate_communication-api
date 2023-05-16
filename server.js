const express = require('express');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Config
dotenv.config({path: './config/config.env'})


// Connect Database
connectDatabase();

app.get('/', (req, res) => {
    console.log('Hello! This is the home page...')
})

// Import the modules

// Register the routes



// const api = process.env.API_URL



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});