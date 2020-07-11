const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.Category = require('./category')(sequelize, Sequelize);
db.Question = require('./question')(sequelize, Sequelize);

db.Category.hasMany(db.Question, { foreignKey: 'ctg_id', sourceKey: 'id' })
db.Question.belongsTo(db.Category, { foreignKey: 'ctg_id', targetKey: 'id' })

// // db.User.hasMany(db.Project, { foreignKey: 'creator', sourceKey: 'id' });
// // db.Project.belongsTo(db.User, { foreignKey: 'creator', targetKey: 'id' });

module.exports = db;
