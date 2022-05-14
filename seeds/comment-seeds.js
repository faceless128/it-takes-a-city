// Require Comment Model
const { Comment } = require("../models");

// Set up Comment Data
const commentData = [
  {
    comment_text: "Nunc rhoncus dui vel sem.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Aliquam erat volutpat. In congue.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Aliquam erat volutpat. In congue.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Aliquam erat volutpat. In congue.",
    user_id: 4,
    post_id: 2,
  },
  {
    comment_text: "Aliquam erat volutpat. In congue.",
    user_id: 5,
    post_id: 3,
  },
];

// Bulk create Comments
const seedComments = () => Comment.bulkCreate(commentData);
// Export
module.exports = seedComments;
