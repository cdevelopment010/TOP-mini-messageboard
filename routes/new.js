var express = require('express');
var router = express.Router();

const { messages } = require('./index');

/* GET new message page. */
router.get('/', function(req, res, next) {
    res.render('new', { title: 'New message' });
});

router.post('/', function(req, res, next) {
    const newMessage = {
        user: req.body.name,
        text: req.body.message, 
        added: new Date(),
        myUser: true
    }
    messages.push(newMessage);
    res.redirect('/') 
})
  
module.exports = router;