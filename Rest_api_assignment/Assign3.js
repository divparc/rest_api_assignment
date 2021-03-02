var express = require("express");

var app = express();
app.use(express.json());
var i;
const inventory = [
{ name:'Apples', quantity:3},
{ name:'Oranges', quantity:7},
{ name:'Pomegranatee', quantity:55}
];
//var json = JSON.parse(inventory);
//var name1 = json[i].name;
//const quantity = inventory.quantity;
app.post('/api/inventory', (req, res) => {
    const invent = {
     quantity: 50,
     name: 'Mango',
    };
    inventory.push(invent);
    res.send(invent);
});

app.listen(8081);
console.log("Listening to port 8081");
