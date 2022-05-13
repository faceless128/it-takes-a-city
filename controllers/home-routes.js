// REQUIREMENTS //
const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  User,
  Post,
  Comment,
  City,
  Location
} = require("../models");

// ROUTES //

// EXPORT MODULE //
