var express = require('express');
var router = express.Router();

router.get('/all', function(req, res) {
    res.send('work in progress');
});

router.get('/new', function(req, res) {
    res.render('newactivity');
});

router.post('/new', function(req, res) {
    var db = req.app.locals.db;
    var dbRef = db.ref('posts');
    dbRef.push().set(req.body);
    res.render('newactivity');
});

module.exports = router;
