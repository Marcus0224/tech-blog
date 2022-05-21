const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'jessie0',
    email: 'jessie0@gmail.com',
    password: 'password123'
  },
  {
    username: 'honey1',
    email: 'honey1@gmail.com',
    password: 'password123'
  },
  {
    username: 'tyler2',
    email: 'tyler2@gmail.com',
    password: 'password123'
  },
  {
    username: 'fallon3',
    email: 'fallon3@gmail.com',
    password: 'password123'
  },
  {
    username: 'cece4',
    email: 'cece4@gmail.com',
    password: 'password123'
  },
  {
    username: 'brook5',
    email: 'brook5@gmail.com',
    password: 'password123'
  },
  {
    username: 'trinity6',
    email: 'trinity6@gmail.com',
    password: 'password123'
  },
  {
    username: 'miles7',
    email: 'miles7@gmail.com',
    password: 'password123'
  },
  {
    username: 'kerry8',
    email: 'kerry8@gmail.com',
    password: 'password123'
  },
  {
    username: 'juan9',
    email: 'juan9@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;