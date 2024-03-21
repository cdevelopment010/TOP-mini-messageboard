var express = require('express');
var router = express.Router();

const { messages } = require('./index');

/* GET new message page. */
router.get('/', function(req, res, next) {
    res.render('form', { title: 'Mini Messageboard', subtitle: 'New message', errorMsg: '' });
});

router.post('/', function(req, res, next) {
    const newMessage = {
        user: req.body.name,
        text: req.body.message, 
        added: new Date(),
        myUser: true
    }

    // check name and text is populated 
    if (!newMessage.user || !newMessage.text){
        res.render('form', { title: 'Mini Messageboard', subtitle: 'New message', errorMsg: "Please populate name and message" });
        return;
    }

    messages.push(newMessage);
    res.redirect('/') 
})
  
module.exports = router;