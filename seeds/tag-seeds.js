const { Tag } = require("../models");

const TagData = [
  {
    id: 1,
    tag_name: "Shelter",
  },
  {
    id: 2,
    tag_name: "Food",
  },
  {
    id: 3,
    tag_name: "Clothing",
  },
];

// Bulk create Location Tags
const seedTags = () => Tag.bulkCreate(TagData);

// Export
module.exports = seedTags;
