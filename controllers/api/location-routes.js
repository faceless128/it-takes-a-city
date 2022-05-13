// REQUIREMENTS //
const router = require("express");
const {
  User,
  Post,
  Comment,
  City,
  Location
} = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

// ROUTES //

// this route will GET all Locations
router.get("/", (req, res) => {
  Location.findAll()
    .then((dbLocationData) => res.json(dbLocationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will GET a Location by id
router.get("/:id", (req, res) => {
  Location.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "location_name", "address"],
      include: [{
        model: City,
        attributes: ["name", "stateName"],
      }, ],
    })
    .then((dbLocationData) => {
      if (!dbLocationData) {
        res.status(404).json({
          message: "No Location found with this ID.",
        });
        return;
      }
      res.json(dbLocationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will POST/ add a Location
// users will be required to be logged in to use this feature
router.post("/", withAuth, (req, res) => {
  Location.create({
      Location_name: req.body.foodbank_name,
      address: req.body.address,
      city_id: req.body.city_id,
    })
    .then((dbLocationData) => res.json(dbLocationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will PUT/update a Location by id
// users will be required to be logged in to use this feature
router.put("/:id", withAuth, (req, res) => {
  Location.update({
      Location_name: req.body.location_name,
      address: req.body.address,
      city_id: req.body.city_id,
    }, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbLocationData) => {
      if (!dbLocationData) {
        res.status(404).json({
          message: "No Location found with this ID!",
        });
        return;
      }
      res.json(dbLocationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route is to DELETE a Location by id
// users will be required to be logged in to use this feature
router.delete("/:id", withAuth, (req, res) => {
  Location.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbLocationData) => {
      if (!dbLocationData) {
        res.status(404).json({
          message: "No Location found with this ID!",
        });
        return;
      }
      res.json(dbLocationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// EXPORT MODULE //
module.exports = router;
