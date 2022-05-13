const router = require("express").Router();
const {
  User,
  Post,
  Comment,
  City,
  Location
} = require("../../models");
const withAuth = require("../../utils/auth");
