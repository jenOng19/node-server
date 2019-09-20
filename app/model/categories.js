module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  return Categories;
}
