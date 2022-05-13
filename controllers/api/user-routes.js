const router = require("express");
const {
  User,
  Post,
  Comment,
  City,
  Location,
} = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

// this route is to GET all users
router.get("/", (req, res) => {
  User.findAll({
      attributes: {
        exclude: ["password"]
      }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
