const express = require('express');
const router = express.Router();
const User = require('../models/User');



// Login Route and Service

router.post('/', async (req, res) => {
    
    
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: 'slfdjslk'
    })
    // want a query here
    try {
        const users = await User.findOne({username: user.username, password: user.password}); // write query
        if(users) {
            res.send('<h1>Successfully logged in<h1>')
        } else {
            
            res.send('<h1>Couldn\'t log in<h1>');
        }
    }
    catch(err) {
        res.send(`<p>${err}</p>`)
    }
    
})



module.exports = router;