'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn( 'EmailTemplates', 'readonly', {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn( 'EmailTemplates', 'readonly' );
  }
};
