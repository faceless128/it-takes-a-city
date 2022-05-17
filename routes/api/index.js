// REQUIREMENTS //
const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes.js");
const commentRoutes = require("./comment-routes.js");
const cityRoutes = require("./city-routes.js");
const locationRoutes = require("./location-routes.js");
const tagRoutes = require("./tag-routes.js");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/cities", cityRoutes);
router.use("/locations", locationRoutes);
router.use("/tags", tagRoutes);

// EXPORT MODULE //
module.exports = router;
