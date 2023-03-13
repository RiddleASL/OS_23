var express = require('express');
var app = express();
var count = 0;

var request = new XMLHttpRequest()
request.open('GET', 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m', true)


app.get('/', function (req,res) {
    count++

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
    }
    request.send()
    
    console.log("Got Get", count);
    res.send('Hello GET. Count: ' + count)
})

app.post('/', function(req,res){
    console.log("Got post");
    res.send("Hello POST")
})

app.get('/list_user', function(req,res){
    res.send('Page Listing')
})

var server = app.listen(8001, function (){
    var host = server.address().address;
    var port = server.address().port;
})