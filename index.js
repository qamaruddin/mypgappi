var express = require('express');
var firebase = require('firebase');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport')
    , LocalStrategy = require('passport-local').strategy;

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('assets'));

passport.use(new LocalStrategy(function(username, password, done){

}));

app.use('/assets', express.static('assets'));

firebase.initializeApp({
    serviceAccount: "mypg-8a3eb771f1e6.json",
    databaseURL: "https://mypg-2b7e3.firebaseio.com/"
});

var db = firebase.database();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/activity', function(req, res) {
    res.send('work in progress');
});

app.post('/activity', function(req, res) {
    console.log(req.body);
    var postRef = db.ref('posts');
    postRef.push(req.body);
    //console.log();
    res.send('we have saved the data');
});

app.listen(3000, function() {
    console.log('we are running at port 3000.')
});
