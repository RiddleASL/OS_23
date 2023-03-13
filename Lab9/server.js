var express = require('express');
var app = express();
var fs = require('fs');

var data;

fs.readFile('./JSONfiles/students.json', 'utf-8', (err, jsonString) => {
  data = jsonString;
});

app.get('/lastNames', function(req,res){

  const userArray = JSON.parse(data);

  var lastNames = "";
  userArray.forEach(user => {
    lastNames += `${user.lname}, `;
  })

  res.send(lastNames)
  console.log(data);
  
})

//* ID
app.get('/course_:id', function(req,res){

  const userArray = JSON.parse(data);

  res.send(JSON.stringify(userArray[req.params.id].course))
  console.log(data);
  
})

app.get('/addStudent', function(req,res){

  var userArray = JSON.parse(data);

  var student = {
    "fname":"adam",
    "lname":"sam",
    "course":"computing",
    "year":"2022"
  }

  userArray.push(student)
  
  fs.writeFile('./JSONfiles/user.json', JSON.stringify(userArray), err => {
    if(err){
      console.log(err);
    }
  })
  
})

app.get('/delete_:id', function(req,res){

  var _data = JSON.parse(data);
  delete _data[req.params.id]
  
})


var server = app.listen(8001, function(){
  var host = server.address().address
  var port = server.address().port

  console.log("Working");
})