var express = require('express');
var app = express();

var port = process.env.PORT;//or assign integer value to specify port number.


//routing:
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    //res.send('Hi!');
    res.render('index', { 
        list: ['1st val', '2nd val', '3rd val'],
        nav: ['Services','Portfolio','About','Team', 'Contact']
    });
});

app.get('/routing', function(req, res){
    res.send('Routing extension!');
    //res.render('index', { list: ['1st val', '2nd val', '3rd val']});
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
    // if(err){
    //     console.log(err);
    //     throw err;
    // }
});

