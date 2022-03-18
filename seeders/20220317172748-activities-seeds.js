'use strict';

const fs = require('fs')
const path = require("path")
let activitiesData = null;

module.exports = {
  async up (queryInterface, Sequelize) {
     try {
      const jsonString = fs.readFileSync(path.join(__dirname, "../data/MOCK_DATA.json"))
      activitiesData = JSON.parse(jsonString)
    } catch(err) {
      console.log(err)
      return
    }
    const requisites = await queryInterface.sequelize.query(
      'SELECT id FROM requisites', {
        type: queryInterface.sequelize.QueryTypes.SELECT
      });

    let filteredDatas = [];

    for (const [index, iterator] of activitiesData.entries()) {
      filteredDatas.push({
        activity_title: iterator.activity_title,
        suggested_location: iterator.suggested_location,
        suggested_weather_conditions: iterator.suggested_weather_conditions,
        unsuggested_weather_conditions: JSON.stringify(iterator.unsuggested_weather_conditions),
        requisites_id: requisites[index].id,
        created_at: Sequelize.fn("NOW"),
        updated_at: Sequelize.fn("NOW")
      });
    }

    await queryInterface.bulkInsert('activities', filteredDatas, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('activities', null, {});
  }
};
