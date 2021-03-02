var express = require("express");
const { Joi } = require("joi");
//const Joi = require('joi')
var app = express();
var i;
const inventory = [
{name:'Apples', quantity:3},
{name:'Oranges', quantity:7},
{name:'Pomegranatee', quantity:55}
];

//var json = JSON.parse(inventory);
//var name1 = json[i].name;
//const quantity = inventory.quantity;
app.put('/api/inventory/:quantity', (req, res) => {
    const invent = inventory.find(b => b.quantity === parseInt(req.params.quantity));
    if(!invent) res.status(404).send('not found');
    
    const { error } = validateInvent(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    invent.name = req.body.name;
    res.send(invent);
});

function validateInvent(invent) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(invent, schema);
}

/*app.put('/api/inventory', (req, res) => {
    //const invent = inventory.find(b => b.quantity === parseInt(req.params.quantity));
    //const invent = inventory.find(b => b.quantity);
    if(!inventory) res.status(404).send('not found');
    
    //const index = inventory.indexOf(inventory);
    const abc = inventory.splice(inventory, i);

    console.log('All items deleted ');
    res.send(abc);
});*/
app.listen(8081);
console.log("Listening to port 8081");
