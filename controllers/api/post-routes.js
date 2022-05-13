const router = require("express").Router();
const {
  Post,
  User,
  Comment,
  City,
  Location
} = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");
