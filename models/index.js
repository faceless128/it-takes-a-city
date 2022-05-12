// TO DO: Import ALL Models
// Require Post
const Post = require("./Post");
// Require User
const User = require("./User");
// Require Comment
const Comment = require("./Comment");
// Require City
const City = require("./City");
// Require foodbank
const Foodbank = require("./Foodbank");

// Set up Associations

// Post.belongsTo(User, {})

// Post.hasMany(Comment, {})

// Comment.belongTo(User, {})

City.hasMany(Foodbank, {
  foreignKey: "foodbank_id"
})

Foodbank.belongsTo(City, {
  foreignKey: "city_id"
})


// EXPORT MODELS //
module.exports = { User, Post, Comment, City, Foodbank };
