'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
			ownerId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Users' }
      },
			title: {
				allowNull: false,
        type: Sequelize.STRING
      },
			imageUrl: {
				allowNull: false,
        type: Sequelize.STRING
      },
			productUrl: {
				allowNull: false,
        type: Sequelize.STRING
      },
			description: {
				allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
				type: Sequelize.DATE,
				// defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: true,
				type: Sequelize.DATE,
				// defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};
