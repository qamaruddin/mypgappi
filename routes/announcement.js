var express = require('express');
var router = express.Router();

router.get('/all', function(req, res) {
    res.send('work in progress');
});

router.get('/new', function (req, res) { 
    res.render('newannouncement');
});

router.post('/new', function(req, res) {
    // console.log(req.body);
    // var postRef = req.app.locals.db.ref('annoucements');
    // postRef.push(req.body);
    // console.log();
    // res.send('we have saved the data');
    res.render('newactivity');
});

module.exports = router;
