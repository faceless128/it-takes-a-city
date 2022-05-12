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
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({
        message: "No city found with this id."
      });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
