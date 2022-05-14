const { Tag } = require("../models");

const TagData = [
  {
    // DATA TO GO HERE //
  },
];

// Bulk create Location Tags
const seedTags = () => Tag.bulkCreate(TagData);

// Export
module.exports = seedTags;
