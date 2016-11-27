var express = require('express');
var eventRouter = express.Router();

var nav= [
                {Link: 'Services', Text: 'Services'},
                {Link: 'Portfolio', Text: 'Portfolio'},
                {Link: 'About', Text: 'About'},
                {Link: 'Team', Text: 'Team'},
                {Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text: 'Events'}
                ]


var eventslist = ['1st event', '2nd event']

var eventsData = [
    {
        name: 'Event 1',
        description: 'The first Event.',
        date: '2016.03.03',
        time: '3:00 PM',
        duration: '3 Hours',
        location: {
            streetAddress: '303 Main Str',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885'
        },
        capacity: 300
    },
    {
        name: 'Event 2',
        description: 'The Second Event.',
        date: '2016.03.03',
        time: '6:15 PM',
        duration: '2 Hours',
        location: {
            streetAddress: '303 Main Str',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885'
        },
        capacity: 300
    }
    ]

eventRouter.route('/').get(function(req, res){
    res.render('events', { eventslist, nav, eventsData });
})

eventRouter.route('/event').get(function(req, res){
    res.send('Hello Single Event');
})

module.exports = eventRouter;