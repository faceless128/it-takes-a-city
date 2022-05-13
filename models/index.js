// Require Post
const Post = require("./Post");
// Require User
const User = require("./User");
// Require Comment
const Comment = require("./Comment");
// Require City
const City = require("./City");

// Require foodbank
const Location = require("./Location");

User.hasMany(Post, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

City.hasMany(Location, {
  foreignKey: "location_id",
});

Location.belongsTo(City, {
  foreignKey: "city_id",
});

module.exports = { User, Post, Comment, City, Location };
