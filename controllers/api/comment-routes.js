const router = require("express").Router();
const {
  User,
  Post,
  Comment,
  City,
  Location
} = require("../../models");
const withAuth = require("../../utils/auth");

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
router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id
      })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});
