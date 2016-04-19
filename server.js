//Express module
var express = require('express');
var app = express();
//mongojs module
var mongojs = require('mongojs');
var  db = mongojs('contactlist',['contactlist']); //mongojs('db',['collection']);
//static directory
app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req,res){
    console.log('received GET request');
    db.contactlist.find(function(err,docs){
       console.log(docs);
       res.json(docs);
    });
});

app.listen(3000, function(){
    console.log('server is connected to port : 3000');
});
