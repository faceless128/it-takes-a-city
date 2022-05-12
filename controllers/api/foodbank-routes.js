const router = require("express");
const {
  User,
  Post,
  Comment,
  City,
  Foodbank,
} = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

// this route will GET all foodbanks
router.get("/", (req, res) => {
  Foodbank.findAll()
  .then((dbFoodbankData) => res.json(dbFoodbankData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});
