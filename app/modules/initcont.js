"use strict";

// var fs = require("fs");
// var path = require("path");
const { Sequelize, DataTypes } = require('sequelize');
// var basename = path.basename(module.filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
  var sequelize = new Sequelize('googlebooks_db', 'root', 'Ss17091997', {
    host: 'localhost',
    port: '5000',
    dialect:'mysql'
  })
// };



//  const booksSchema = function (sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//       Id: { type: DataTypes.INTEGER, allowNull: false },
//       name: { type: DataTypes.STRING, allowNull: false },
//       Password: { type: DataTypes.INTEGER, allowNull: false },
//       balance: { type: DataTypes.INTEGER, allowNull: false }
//   });
//   // User.create({ name: `${username}`, Password: password, balance: 10000 })
// };

const Books = sequelize.define('books', {
  // Model attributes are defined here
  title: { type: DataTypes.STRING, allowNull: false },
  authors: { type: DataTypes.STRING},
  discription: { type: DataTypes.STRING},
  image: { type: DataTypes.STRING},
  link: { type: DataTypes.STRING},
}, {
  // Other model options go here
    timestamps: false
});

// console.log(Books === sequelize.models.Books);





async function testconnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testconnection() 

console.log("db: " + JSON.stringify(Books.findAll()));

module.exports = Books;



