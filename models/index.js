// TO DO: Import ALL Models
// Require Post
const Post = require("./Post");
// Require User
const User = require("./User");
// Require Comment
const Comment = require("./Comment");
// Set up Associations

// Post.belongsTo(User, {})

// Post.hasMany(Comment, {})

// Comment.belongTo(User, {})

// EXPORT MODELS //
module.exports = { User, Post, Comment };
