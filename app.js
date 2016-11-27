var express = require('express');
var app = express();

var port = process.env.PORT;//or assign integer value to specify port number.
var eventRouter = require('./src/routes/eventRoutes');
var list = ['1st val', '2nd val', '3rd val']


var nav= [
                {Link: 'Services', Text: 'Services'},
                {Link: 'Portfolio', Text: 'Portfolio'},
                {Link: 'About', Text: 'About'},
                {Link: 'Team', Text: 'Team'},
                {Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text: 'Events'}
                ]

//routing:
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');




app.use('/Events', eventRouter)


app.get('/', function(req, res){
    //res.send('Hi!');
    res.render('index', { list, nav});
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

