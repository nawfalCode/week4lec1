let express = require('express');
let app = express();
let morgan = require('morgan');
let ejs = require('ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views',__'/public');

let bodyParser = require('body-parser');


app.use(express.static('img'));
app.use(morgan('common'));

app.use(bodyParser.urlencoded({
    extended: false
}));

let ar=[{name:'Tim',age:23},{name:'John',age:24}];


app.get('/', function (req, res) {
    console.log('Hello from  app.get');
    // res.sendFile('index.html');
    res.render('index.html', {username: 'Tim',data:ar});


    // res.send('Thank you for your request!!!!');
});

app.post('/data', function (req, res) {
    console.log('I got a post request');
    console.log(req.body.carName);

});

app.listen(8080);