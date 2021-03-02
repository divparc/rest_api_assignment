var express = require("express");

var app = express();
var i;
const inventory = [
{ name:'Apples', quantity:3},
{ name:'Oranges', quantity:15},
{ name:'Pomegranatee', quantity:55}
];
//var json = JSON.parse(inventory);
//var name1 = json[i].name;
//const quantity = inventory.quantity;
app.delete('/api/inventory/:quantity', (req, res) => {
    const invent = inventory.find(b => b.quantity === parseInt(req.params.quantity));
    if(!invent) res.status(404).send('not found');
    
    const index = inventory.indexOf(invent);
    inventory.splice(index, 1);

    console.log('item deleted with quantity ' + req.params.quantity);
    res.send(inventory);
});
app.delete('/api/inventory', (req, res) => {
    if(!inventory) res.status(404).send('not found');
    
    //const index = inventory.indexOf(inventory);
    const abc = inventory.splice(inventory, i);

    console.log('All items deleted ');
    res.send(abc);
});
app.listen(8081);
console.log("Listening to port 8081");
