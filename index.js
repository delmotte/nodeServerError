var express = require('express');
var app = express();
var stringify = require('json-stringify');
var bodyParser = require('body-parser');
var request = require('request');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.post('/api/codeship-back/', function(req, res){

    var web = "https://discordapp.com/api/webhooks/315144917959704576/iWLY3h_T64NaFtI3Ih4g9GFQRTeDIa-wX2o5MBU5Xc0oj4YiAH1-9XS90uXeOiDnPUCR";
    var bigbody = req.body;
    if(bigbody.build.status == "error"){
      var payload = {
        "content": "[BUILD FAILED] - ["+ bigbody.build.branch + "]",
        "embeds":[
        {
          "title": "From  " + bigbody.build.committer,
          "description": "\t\t" + bigbody.build.message + "\n\n" +
                          "BUILD URL: [click here](" + bigbody.build.commit_url + ") \n\n" +
                          "COMMIT URL: [click here](" + bigbody.build.build_url + ")\n",
          "color": 13777980
        }]
      };

      request.post({
        url: web,
        json: true,
        body: payload,
        headers: {'Content-Type': 'application/json'}
      }, function (error, response, body) {
            if (!error && response.statusCode == 204) {
              res.json(bigbody);
            }else{
              res.send("erreur dans l'envoi du message");
            }
      });
    }else{
      res.send("pas le bon status");
    }
});

app.post('/api/codeship-front/', function(req, res){

    var web = "https://discordapp.com/api/webhooks/315145538540404736/-yQuT-bjLJawih1Ckfw7VTJVC0ruoqoVmQNW88Xj6_fFNkSZLdIDY8Ui1wpL8yFH8jfm";
    var bigbody = req.body;
    if(bigbody.build.status == "error"){
      var payload = {
        "content": "[BUILD FAILED] - ["+ bigbody.build.branch + "]",
        "embeds":[
        {
          "title": "From  " + bigbody.build.committer,
          "description": "\t\t" + bigbody.build.message + "\n\n" +
                          "BUILD URL: [click here](" + bigbody.build.commit_url + ") \n\n" +
                          "COMMIT URL: [click here](" + bigbody.build.build_url + ")\n",
          "color": 13777980
        }]
      };

      request.post({
        url: web,
        json: true,
        body: payload,
        headers: {'Content-Type': 'application/json'}
      }, function (error, response, body) {
            if (!error && response.statusCode == 204) {
              res.json(bigbody);
            }else{
              res.send("erreur dans l'envoi du message");
            }
      });
    }else{
      res.send("pas le bon status");
    }
});

app.listen(PORT, function(){
  console.log("server started at: " + PORT);
})
