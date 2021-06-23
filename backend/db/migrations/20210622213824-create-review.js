'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Users' }
      },
			productId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Products' }
      },
			review: {
				allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: true,
				type: Sequelize.DATE,
				// defaultValue: faker.date.past(),
				// defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: true,
				type: Sequelize.DATE,
				// defaultValue: faker.date.recent(),
				// defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};
