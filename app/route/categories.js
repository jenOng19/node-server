module.exports = function (app) {

  const categories = require('../controller/categories.js');

  app.get('/api/categories', categories.findAll);

  app.get('/api/categories/:categoriesId', categories.findByPk);

  app.post('/api/categories', categories.create);

  app.put('/api/categories/:categoriesId', categories.update);

  app.delete('/api/categories/:categoriesId', categories.delete);
}
