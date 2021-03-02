var express = require("express");

var app = express();
var i;
var inventory = '[{"name":"Apples","quantity":3},{"name":"Oranges","quantity":7},{"name":"Pomegranatee","quantity":55}]';
var json = JSON.parse(inventory);
//var name1 = json[i].name;
app.get("/inventory", function (req, res) {
  res.send(json);
});
for(i in json) {
    name1 = json[i].name
app.get("/inventory/:name1", function (req, res) {
    for(i in json) {
        if(json[i].name == "Apples") {
            res.send(json[i]);
        }
    }
  });
}
app.listen(8081);
console.log("Listening to port 8081");
