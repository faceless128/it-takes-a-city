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
const withAuth = require("../../utils/auth");

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

// this route is for a user to POST/create a tag
// users will be required to be logged in to use this feature
router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Tag.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id
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
router.delete("/:id", withAuth, (req, res) => {
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
