const Sequelize = require('sequelize')
const db = require('../../config/databases')

const City = db.define('city', {
    Name: {
        type: Sequelize.STRING
    },
    adress: {
      type: Sequelize.STRING
    }
})

module.exports = City;
