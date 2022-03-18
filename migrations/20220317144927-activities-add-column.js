'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('activities', 'requisites_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "requisites",
        key: "id"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('activities', 'requisites_id');
  }
};
