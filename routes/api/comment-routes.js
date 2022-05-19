// REQUIREMENTS //
const router = require("express").Router();
const {
  User,
  Post,
  Comment,
  City,
  Location
} = require("../../models");
const { requiresAuth } = require('express-openid-connect');

// ROUTES //

// this route will GET all comments
router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route is for a user to POST/create a comment
// users will be required to be logged in to use this feature
router.post("/", requiresAuth(), (req, res) => {
  User.findOne({
    where: {
        email: req.oidc.user.email
    }
  })
  .then(getUserID => {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: getUserID.id
      })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
});

// this route will be for users to DELETE/destroy a comment by id
// users will be required to be logged in to use this feature
router.delete("/:id", requiresAuth(), (req, res) => {
  Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({
          message: "No comment found with this id!"
        });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// EXPORT MODULE //
module.exports = router;
