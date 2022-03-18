'use strict';

const fs = require('fs')
const path = require("path")
let activitiesData = [];
let requisitesArray = [];

module.exports = {
  async up (queryInterface, Sequelize) {
     try {
      const jsonString = fs.readFileSync(path.join(__dirname, "../data/MOCK_DATA.json"))
      activitiesData = JSON.parse(jsonString);

      for (const iterator of activitiesData) {
        requisitesArray.push({...iterator.requisites, ...{
          created_at: Sequelize.fn("NOW"),
          updated_at: Sequelize.fn("NOW")
        }});
      }
    } catch(err) {
      console.log(err)
      return
    }

    await queryInterface.bulkInsert('requisites', requisitesArray, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('requisites', null, {});
  }
};
