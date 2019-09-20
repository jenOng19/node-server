const env =require('./env.js');

const Sequelize= require('sequelize');

const sequelize = new Sequelize(env);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

//Models/tables
db.customers =require('../model/customer.js')(sequelize, Sequelize);
db.orders = require('../model/orders.js')(sequelize, Sequelize);
// db.orderitems = require('../model/orderitems.js')(sequelize, Sequelize);
// db.products = require('../model/products.js')(sequelize, Sequelize);
// db.categories = require('../model/categories.js')(sequelize, Sequelize);

//Relations
// db.categories.belongsTo(db.products, { foreignKey: 'products_id' });
// db.products.hasOne(db.categories);
// db.products.belongsTo(db.orderitems, { foreignKey: 'orderitems_id' });
// db.orderitems.hasOne(db.products);
// db.orderitems.belongsTo(db.orders, { foreignKey: 'order_id' });
// db.orders.hasMany(db.orderitems);
db.orders.belongsTo(db.customers, {foreignKey: 'customer_id'});
db.customers.hasMany(db.orders, { foreignKey: 'customer_id'});

module.exports=db;


//Attach all Sequelize models to a single db object and injecting this object
//into all routes and controllers.
//It's a convenient way to have access to everything.

//Reference:
//sourceModel.hasOne(targetModel)
//sourceModel.hasMany(targetModel)
//targetModel.belongsTo(sourceTable)
