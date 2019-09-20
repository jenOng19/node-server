module.exports=(sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    id:{
      allowNull:false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },
    firstname:{
      type: DataTypes.STRING
    },
    lastname:{
      type: DataTypes.STRING
    },
    address:{
      type: DataTypes.STRING
    },
    zipcode:{
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  });

  return Customer;
}

// setting allowNull to false will add NOT NULL to the column, which means an error will be
// thrown from the DB when the query is executed if the column is null.
