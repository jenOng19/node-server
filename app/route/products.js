module.exports = function (app) {

  const products = require('../controller/products.js');

  app.get('/api/products', products.findAll);

  app.get('/api/products/:productsId', products.findByPk);

  app.post('/api/products', products.create);

  app.put('/api/products/:productsId', products.update);

  app.delete('/api/products/:productsId', products.delete);
}
