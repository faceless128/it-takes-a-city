// REQUIREMENTS //
const router = require("express").Router();
const {
  Post,
  User,
  Comment,
  City,
  Location
} = require("../../models");
const sequelize = require("../../config/connection");
const { requiresAuth } = require('express-openid-connect');

// ROUTES //

// this route will GET all posts
router.get("/", (req, res) => {
  Post.findAll({
      attributes: ["id", "content", "title", "created_at"],
      order: [
        // ["created_at", "DESC"]
        ["id", "ASC"]
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

// this route will GET a single post by id
router.get("/:id", (req, res) => {
  Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "content", "title", "created_at"],
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
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({
          message: "No post found with this id!"
        });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will be for users to POST/create a post
// users will be required to be logged in to use this feature
router.post("/", requiresAuth(), (req, res, next) => {
  // gets user email from auth0 and searches for email in DB
  User.findOne({
    where: {
        email: req.oidc.user.email
    }
  })
  // if user exists, create post with userID
  .then(getUserID => {
    if (getUserID) {
      Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: getUserID.id
      })
      // else create user then create post
    } else {
      User.create({
        username: req.oidc.user.name,
        email: req.oidc.user.email
      })
      .then(getUserID => {
        Post.create({
          title: req.body.title,
          content: req.body.content,
          user_id: getUserID.id
        })
      })
    }
  })
  .then((dbPostData) => res.json(dbPostData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// this route is for users to PUT/update a post by id
// users will be required to be logged in to use this feature
router.put("/:id", requiresAuth(), (req, res) => {
  Post.update({
      title: req.body.title,
      content: req.body.content,
    }, {
      where: {
        id: req.params.id,
      },
    })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({
          message: "No post found with this id!"
        });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route is to DELETE/destroy a post by id
// users will be required to be logged in to use this feature
router.delete("/:id", requiresAuth(), (req, res) => {
  Post.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({
          message: "No post found with this id!"
        });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// EXPORT MODULE //
module.exports = router;
