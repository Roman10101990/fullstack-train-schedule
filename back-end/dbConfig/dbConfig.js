const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST,
  define: {
    timestamps: false
  }
});

sequelize.sync()
  .then(()=>console.log("db is connected..."))
  .catch(err=> console.log(err));

module.exports = sequelize;