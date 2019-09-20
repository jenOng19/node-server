const express= require('express');

const server= express();

const bodyParser= require('body-parser');
server.use(bodyParser.json());

const db = require('./app/config/db.config');

db.sequelize.sync()
.then(()=>{
  console.log('Table Created}');
});

require('./app/route/customer.js')(server);
require('./app/route/orders.js')(server);
// require('./app/route/orderitems.js')(server);
// require('./app/route/products.js')(server);
// require('./app/route/categories.js')(server);

server.listen(3001, ()=>{
  console.log('server is running on port 3001')
})
