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

// this route will GET all cities
router.get("/", (req, res) => {
  City.findAll()
    .then(dbCityData => res.json(dbCityData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will GET one city by id
router.get("/:id", (req, res) => {
  City.findOne({
    where: {
      id: req.params.id,
    },
    include: [{
      model: Foodbank,
      attributes: ["id", "foodbank_name", "address"]
    }]
  })
  .then(dbCityData => {
    if (!dbCityData) {
      res.status(404).json({
        message: "No city found with this id."
      });
      return;
    }
    res.json(dbCityData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// this route will POST/create a city
// users will be required to be logged in to use this feature
router.post("/", withAuth, (req, res) => {
  Post.create({
    name: req.body.name,
    stateName: req.body.stateName
  })
  .then((dbCityData) => res.json(dbCityData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});
