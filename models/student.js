const Sequelize = require('sequelize')
const db = require('../configs/db')


const Student = db.define(
  'student',
  {
    id : { primaryKey : true, autoIncrement: true, type : Sequelize.INTEGER},
    first_name : Sequelize.STRING,
    last_name : Sequelize.STRING,
    email : Sequelize.STRING
  },
  {
    tableName : 'student',
    timestamp : true
  }
);

module.exports = Student