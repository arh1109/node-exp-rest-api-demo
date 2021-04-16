const express = require('express');
const router = express.Router();
const User = require('../models/User');


// Write the new user to the database
router.post('/', (req, res) => {
    // console.log(req.body);
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    user.save() // saves to mongodb
    .then(data => {
        res.send('<h1>User created in Database</h1>');
    }).catch(err => {
        res.send(`<p>${err}</p>`);
    })
})



module.exports = router;