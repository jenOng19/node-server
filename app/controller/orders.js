const db = require('../config/db.config');
const Orders = db.orders;


exports.create = (req, res) => {
  // console.log("params:", req.params);
  // console.log("req body", req.body)
  Orders.create({
    customer_id: req.body.customer_id,
    total: req.body.total,
  }).then(order => {
    res.send(order);
  });
};

exports.findAll = (req, res) => {
  Orders.findAll()
    .then(order => {
      res.send(order);
    })
};

exports.findByPk = (req, res) => {
  Orders.findByPk(req.params.orderId)
    .then(order => {
      res.send(order);
    })
};

exports.findByCustomerId = (req, res) => {
  Orders.findByPk(req.params.customerId)
    .then(order => {
      res.send(order);
    })
};

exports.update = (req, res) => {
  const id = req.params.orderId;

  Orders.update(
    {
      customer_id: req.body.customer_id,
      total: req.body.total,
    },
    {
      where: {
        id: id
      }
    }
  ).then(() => {
    res.status(200).send("successfully updated order with id = " + id);
  });
};

exports.delete = (req, res) => {
  const id = req.params.orderId;
  Orders.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send("successfully deleted order with id = " + id)
  })
}
