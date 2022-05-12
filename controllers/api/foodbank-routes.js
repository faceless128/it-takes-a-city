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

// this route will GET a foodbank by id
router.get("/:id", (req, res) => {
  Foodbank.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "foodbank_name", "address"],
      include: [{
        model: City,
        attributes: ["name", "stateName"],
      }]
    })
    .then((dbFoodbankData) => {
      if (!dbFoodbankData) {
        res.status(404).json({
          message: "No foodbank found with this id."
        });
        return;
      }
      res.json(dbFoodbankData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will POST/add a foodbank
// users will be required to be logged in to use this feature
router.post("/", withAuth, (req, res) => {
  Foodbank.create({
      foodbank_name: req.body.foodbank_name,
      address: req.body.address,
      city_id: req.body.city_id
    })
    .then((dbFoodbankData) => res.json(dbFoodbankData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will PUT/update a foodbank by id
// users will be required to be logged in to use this feature
router.put("/:id", withAuth, (req, res) => {
  Foodbank.update({
      foodbank_name: req.body.foodbank_name,
      address: req.body.address,
      city_id: req.body.city_id
    }, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbFoodbankData) => {
      if (!dbFoodbankData) {
        res.status(404).json({
          message: "No foodbank found with this id."
        });
        return;
      }
      res.json(dbFoodbankData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
