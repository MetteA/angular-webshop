var Orders = require('../../models/orders');

// Wrap all the methods in an object

var order = {
  create: function(req, res, next){
    console.log(req.body)
    var order = new Orders(req.body);
    order.save(function(err, data){
      if(err) console.error;
      res.send(order);
    })
  },
  getAll: function(req, res, next){
    Orders.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  } 
}

// Return the object
module.exports = order;
