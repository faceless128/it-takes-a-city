// REQUIREMENTS //
const router = require("express").Router();
const {
  User,
  Post,
  Comment,
  City,
  Location,
} = require("../../models");
const sequelize = require("../../config/connection");
const { requiresAuth } = require('express-openid-connect');

// ROUTES //

// this route is to GET all users
router.get("/", (req, res) => {
  User.findAll({
      attributes: {
        exclude: ["email"]
      }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route is to get the currently logged in user
router.get("/me", requiresAuth(), (req, res) => {
  User.findOne({
    where: {
        email: req.oidc.user.email
    }
})
.then(getUserID => {
    User.findOne({
        where: {
            id: getUserID.id
        },
        include: [{
            model: Post,
            attributes: ["id", "title", "content", "created_at"],
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
            ]
          },
          {
            model: Comment,
            attributes: ["id", "comment_text", "created_at"],
            include: {
              model: Post,
              attributes: ["title"]
            }
          }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });
});

// this route will GET one user by id
router.get("/:id", (req, res) => {
  User.findOne({
      attributes: {
        exclude: ["email"]
      },
      where: {
        id: req.params.id
      },
      include: [{
          model: Post,
          attributes: ["id", "title", "content", "created_at"]
        },
        {
          model: Comment,
          attributes: ["id", "comment_text", "created_at"],
          include: {
            model: Post,
            attributes: ["title"]
          }
        }
      ]
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({
          message: "No user found with this id"
        });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route will POST/create a user in the DB
router.post("/", (req, res, next) => {
  User.create({
      username: req.body.username,
      email: req.body.email
    })
    .then(dbUserData => {
        res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// this route is to update (PUT) a user by email
router.put("/", requiresAuth(), (req, res) => {
  User.update(req.body, {
      individualHooks: true,
      where: {
        email: req.body.email
      }
    })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({
          message: "No user found with this email!"
        });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this route is to DELETE a user by email
router.delete("/", requiresAuth(), (req, res) => {
  User.findOne({
    where: {
        email: req.oidc.user.email
    }
})
.then(getUserID => {
    User.destroy({
        where: {
            id: getUserID.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  })
});

// EXPORT MODULE //
module.exports = router;
