'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'password', Sequelize.STRING, {
        allowNull: false,
        select: false
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'password')
  }
};
