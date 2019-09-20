module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER
    }
  });

  return Orders;
}
