// importing the Sequelize constructor =
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.JAWSBD_URL) {
  sequelize = new Sequerlize(process.env.JAWSDB_URL);
} else {
sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;