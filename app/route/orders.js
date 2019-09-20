module.exports = function (app) {

  const orders = require('../controller/orders.js');

  app.get('/api/orders', orders.findAll);

  app.get('/api/orders/:orderId', orders.findByPk);

  app.get('/api/orders/:customerId', orders.findByCustomerId);

  app.post('/api/orders', orders.create);

  app.put('/api/orders/:orderId', orders.update);

  app.delete('/api/orders/:orderId', orders.delete);
}
