const sequelize = require("./../dbConfig/dbConfig.js");
const Sequelize = require("sequelize");

const Schedule = sequelize.define("timeTables", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  startPoint: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endPoint: {
    type: Sequelize.STRING,
    allowNull: false
  },
  departure: {
    type: Sequelize.TIME,
    allowNull: false
  },
  arrival: {
    type: Sequelize.TIME,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = Schedule;