var Products = require('../../models/products');

// Wrap all the methods in an object

var product = {
  read: function(req, res, next){
    res.json({type: "Read", id: req.params.id});
  },
  create: function(req, res, next){
    var product = new Products(req.body);
    product.save(function(err, data){
      if(err) console.error;
      res.send(product);
    })
  },
  update: function(req, res, next){
    var id = req.params.id;
    Products.findByIdAndUpdate(id, {$set: req.body}, function(err, product){
      if(err) console.error;
      res.send(product);
    })
  },
  delete: function(req, res, next){
    Products.findByIdAndRemove(req.params.id, function(err, data){
      if(err) console.error;
      res.json(data);
    })
  },
  getAll: function(req, res, next){
    Products.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  } 
}

// Return the object
module.exports = product;
