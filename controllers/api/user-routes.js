const router = require("express").Router();
const {
  User,
  Post,
  Comment,
  City,
  Foodbank,
} = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");


// GET request to show all users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method
    User.findAll({
        attributes: { exclude: ['password'] }
        // excludes password field
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;