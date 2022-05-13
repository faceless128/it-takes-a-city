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
