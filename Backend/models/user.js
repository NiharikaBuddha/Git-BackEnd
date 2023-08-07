// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const User = sequelize.define('user', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   expense_amount: {
//     type: DataTypes.FLOAT,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   category: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false
//   }
// });

// module.exports = User;

const Sequelize=require('sequelize');
const db = require("../config/database");

const User = db.define('user', {
  // id: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  expense_amount: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;

