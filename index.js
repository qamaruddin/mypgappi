var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var firebase = require('firebase');
var exphbs  = require('express-handlebars');

var activity = require('./routes/activity');
var announcement = require('./routes/announcement');

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('assets'));
app.use('/assets', express.static('assets'));
app.use('/activity', activity);
app.use('/announcement', announcement);

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('home');
});

firebase.initializeApp({
    serviceAccount: "mypg-8a3eb771f1e6.json",
    databaseURL: "https://mypg-2b7e3.firebaseio.com/"
});

app.locals.db = firebase.database();

app.listen(3000, function() {
    console.log('we are running at port 3000.')
});
