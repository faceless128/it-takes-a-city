// REQUIREMENTS //
const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  User,
  Post,
  Comment,
  City,
  Location
} = require("../models");

// ROUTES //

// this route will GET all posts for our homepage
router.get("/", (req, res) => {
  Post.findAll({
      attributes: ["id", "title", "content", "created_at"],
      include: [{
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"]
          }
        },
        {
          model: User,
          attributes: ["username"]
        }
      ]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({
        plain: true
      }));
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will GET posts by id for the homepage
router.get("/post/:id", (req, res) => {
  Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ["id", "title", "content", "created_at"],
      include: [{
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"]
          }
        },
        {
          model: User,
          attributes: ["username"]
        }
      ]
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({
          message: "No post found with this id!"
        });
        return;
      }
      const post = dbPostData.get({
        plain: true
      });

      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will redirect users when they've logged in
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// this route will redirect users to the signup
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

// EXPORT MODULE //
module.exports = router;
