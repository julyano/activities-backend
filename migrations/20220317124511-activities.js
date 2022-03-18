module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('activities', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      activity_title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      suggested_location: {
        type: Sequelize.STRING,
        allowNull: true
      },
      suggested_weather_conditions: {
        type: Sequelize.STRING,
        allowNull: false
      },
      unsuggested_weather_conditions: {
        type: Sequelize.JSON,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('activities');
  }
};

