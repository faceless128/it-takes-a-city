const router = require("express");
const {
  User,
  Post,
  Comment,
  City,
  Foodbank,
} = require("../../models");

// this route will GET all cities
router.get("/", (req, res) => {
  City.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
