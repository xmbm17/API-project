'use strict';
const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await User.bulkCreate([
    {
      email:'demo@user.io',
      firstName:'Micheal',
      lastName:'Myers',
      username:'Demo-lition',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email:'second@user.io',
      firstName:'Jason',
      lastName:'Vorhees',
      username:'Demo-lition2',
      hashedPassword: bcrypt.hashSync('password2')
    },
    {
      email:'third@user.io',
      firstName:'Freddy',
      lastName:'Krueger'
,      username:'Demo-lition3',
      hashedPassword: bcrypt.hashSync('password3')
    }
   ],{validate:true});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      username:{[Op.in]:['Demo-lition', 'Demo-lition2','Demo-lition3']}
    },{})
  }
};
