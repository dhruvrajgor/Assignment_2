const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
 'blogging',
 'root1',
 'Dhruv@123',
  {
    host: 'localhost',
    logging : false,
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize,DataTypes);
db.blog = require('./Blog')(sequelize,DataTypes);
db.category = require('./Category')(sequelize,DataTypes);

//sequelize.sync({ force: true });

module.exports = db;