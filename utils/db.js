const knex = require('knex')
const config = require('../knexfile')

//Instantiate our knex instance and connect to our database.
const db = knex(config.development)

module.exports = db