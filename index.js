var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require("./middleware");

app.use(middleware.requireAuth);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.listen(PORT, function(){
  console.log("server started at: " + PORT);
})
