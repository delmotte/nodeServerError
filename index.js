var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuth: function(req, res, next){
        console.log("its ok!");
        next();
    }
}

app.use(middleware.requireAuth);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log("server started at: " + PORT);
})
