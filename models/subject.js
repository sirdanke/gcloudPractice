const Sequelize = require('sequelize')
const db = require('../configs/db')

const Subject = db.define(
  'subject',
  {
    id: { primaryKey: true, autoIncrement : true, type : Sequelize.INTEGER},
    name : Sequelize.STRING,
  },
  {
    tableName: 'subject',
    timestamp : true
  }
);

module.exports = Subject