const express = require('express')

const app = express();
const mongoose = require('mongoose')


const bodyParser = require('body-parser');

app.use(bodyParser.json(), bodyParser.urlencoded({type:"application/x-www-form-urlencoded"}));

// Import Routes
const usersRoute = require('./routes/users')
const registerRoute = require('./routes/register');

// Middlewares - always run when a certain route gets hit. Likelly where database comes into play
app.use('/users', usersRoute
)
app.use('/register', registerRoute)

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})






// Connect to DB 
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true} ,() => {
    // works!
    console.log('connected to DB!')
})

app.listen(8080);