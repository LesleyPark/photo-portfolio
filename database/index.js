const pg = require('pg');
const Sequelize = require('sequelize');

const connection = new Sequelize('lesleyphotos', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

connection.authenticate()
  .then( () => console.log('PostgreSQL is up and running'))
  .catch(err => console.error(err))

module.exports = connection;