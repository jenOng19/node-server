module.exports = function(app){

  const customers = require('../controller/customer.js');

  app.get('/api/customers', customers.findAll);

  app.get('/api/customers/:customerId', customers.findByPk);

  app.post('/api/customers', customers.create);

  app.put('/api/customers/:customerId', customers.update);

  app.delete('/api/customers/:customerId', customers.delete);
}
