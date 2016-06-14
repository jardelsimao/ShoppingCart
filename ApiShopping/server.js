var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var commerceitem = [
  {id:"01", product_id:"01", quantity:1, amount:220.000000},
  {id:"02", product_id:"02", quantity:1, amount:220.000000},
  {id:"03", product_id:"03", quantity:1, amount:220.000000},
  {id:"04", product_id:"04", quantity:1, amount:220.000000}
];

var product = [
  {id:"01", name:"produto01", image:"img/img.jpg", price:50.000000},
  {id:"02", name:"produto02", image:"img/img.jpg", price:50.000000},
  {id:"03", name:"produto03", image:"img/img.jpg", price:50.000000},
  {id:"04", name:"produto04", image:"img/img.jpg", price:50.000000},
  {id:"05", name:"produto05", image:"img/img.jpg", price:50.000000}

]

var shoppingcart = [
  {items:[
      {id:"01", product_id:"01", quantity:1, amount:220.000000},
      {id:"01", product_id:"01", quantity:1, amount:220.000000},
      {id:"01", product_id:"01", quantity:1, amount:220.000000}
    ]
  },
  {amount:220.000000}
];

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/commerceitem', function(req, res) {
  res.json(commerceitem);
});

app.post('/commerceitem', function(req, res) {
  commerceitem.push(req.body);
  res.json(true);
});

app.get('/product', function(req, res) {
  res.json(product);
});

app.get('/product/:id', function(req, res) {
  product.forEach(function (product) {
    if (product.id == req.params.id) {
      res.json(product);
      return;
    }
  });
  res.status(404).end();
});

app.get('/shoppingcart', function(req, res) {
  res.json(shoppingcart);
});

app.get('/shoppingcart/:id', function(req, res) {
  shoppingcart.forEach(function (shoppingcart) {
    if (shoppingcart.id == req.params.id) {
      res.json(shoppingcart);
      return;
    }
  });
  res.status(404).end();
});

app.listen(process.env.PORT || 3412);