const { LocationTag } = require("../models");

const locationTagData = [
  {
    // DATA TO GO HERE //
  },
];

// Bulk create Location Tags
const seedlocationTags = () => LocationTag.bulkCreate(locationTagData);

// Export
module.exports = seedlocationTags;
