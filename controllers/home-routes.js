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

// EXPORT MODULE //
