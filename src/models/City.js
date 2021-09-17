const Sequelize = require('sequelize')
const db = require('../../config/databases')

const City = db.define('city', {
    Name: {
        type: Sequelize.STRING
    }
})

module.exports = City;
