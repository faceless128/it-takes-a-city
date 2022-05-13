// REQUIREMENTS //
const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  Post,
  User,
  Comment
} = require("../models");
const withAuth = require('../utils/auth');

// ROUTES //

// Route #1 - Get ALL Posts/Resources //

// Route #2 - Get Post with ID to Edit //

// EXPORT MODULE //
