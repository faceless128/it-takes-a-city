// REQUIREMENTS //
const router = require("express").Router();
const {
  User,
  Post,
  Comment,
  City,
  Location,
  LocationTag,
  Tag
} = require("../../models");
const { requiresAuth } = require('express-openid-connect');

// ROUTES //

// this route will GET all tags
router.get("/", (req, res) => {
  Tag.findAll()
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will GET a Location by id
router.get("/:id", (req, res) => {
    Tag.findOne({
        where: {
          id: req.params.id,
        },
        include: [{
          model: Location,
          attributes: ["id", "location_name", "address", "state", "resource_city", "zip_code"],
        }],
      })
      .then((dbTagData) => {
        if (!dbTagData) {
          res.status(404).json({
            message: "No Tag found with this ID.",
          });
          return;
        }
        res.json(dbTagData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// this route is for a user to POST/create a tag
// users will be required to be logged in to use this feature
router.post("/", requiresAuth(), (req, res) => {
  if (req.session) {
    Tag.create({
      tag_name: req.body.tag_name
      })
      .then(dbTagData => res.json(dbTagData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// this route will be for users to DELETE/destroy a tag by id
// users will be required to be logged in to use this feature
router.delete("/:id", requiresAuth(), (req, res) => {
  Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({
          message: "No tag found with this id!"
        });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// EXPORT MODULE //
module.exports = router;
