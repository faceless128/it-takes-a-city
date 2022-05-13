const router = require("express").Router();
const {
  Post,
  User,
  Comment,
  City,
  Location
} = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

// this route will GET all posts
router.get("/", (req, res) => {
  Post.findAll({
      attributes: ["id", "content", "title", "created_at"],
      order: [
        ["created_at", "DESC"]
      ],
      include: [{
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
