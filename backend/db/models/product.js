'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
		ownerId: { type: DataTypes.INTEGER, allowNull: false },
		title: { type: DataTypes.STRING, allowNull: false },
		imageUrl: { type: DataTypes.STRING, allowNull: false },
		productUrl: { type: DataTypes.STRING, allowNull: false },
		description: { type: DataTypes.TEXT, allowNull: false }
	}, {});

  Product.associate = function(models) {
		Product.belongsTo(models.User, { foreignKey: 'ownerId' });
		Product.hasMany(models.Review, { foreignKey: 'productId' });
  };
  return Product;
};
