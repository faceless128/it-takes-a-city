// Require Post Model
const { Post } = require("../models");

const postData = [
  // POST #1 //
  {
    title: "Hello World!",
    content: "Donec posuere metus vitae ipsum.",
    user_id: 3,
  },

  // POST #2 //
  {
    title: "Test Post",
    content: "Donec posuere metus vitae ipsum.",
    user_id: 1,
  },
  // POST #3 //
  {
    title: "Lorem Ipsum",
    content: "Donec posuere metus vitae ipsum.",
    user_id: 2,
  },
];

// Bulk create Posts
const seedPosts = () => Post.bulkCreate(postData);

// Export
module.exports = seedPosts;
