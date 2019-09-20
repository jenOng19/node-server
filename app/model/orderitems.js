module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('orderitems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity:{
      type: DataTypes.INTEGER
    }
  });

  return OrderItems;
}
