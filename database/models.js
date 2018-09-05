var Sequelize = require('sequelize');
var connection = require('./');

var photos = connection.define('photo', {
  url: Sequelize.STRING,
}, {timestamps: false})

connection.sync({force: false})
  .then(() => console.log('Synced to PostgreSQL database'))
  .catch(err => console.log('Error syncing to PostgreSQL database'))

module.exports = photos