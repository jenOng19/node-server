module.exports = function (app) {

  const orderitems = require('../controller/orderitems.js');

  app.get('/api/orderitems', orderitems.findAll);

  app.get('/api/orderitems/:orderitemsId', orderitems.findByPk);

  app.post('/api/orderitems', orderitems.create);

  app.put('/api/orderitems/:orderitemsId', orderitems.update);

  app.delete('/api/orderitems/:orderitemsId', orderitems.delete);
}
