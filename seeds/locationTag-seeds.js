const { LocationTag } = require("../models");

const locationTagData = [
  {
    location_id: 1,
    tag_id: 1,
  },
  {
    location_id: 2,
    tag_id: 1,
  },
];

// Bulk create Location Tags
const seedlocationTags = () => LocationTag.bulkCreate(locationTagData);

// Export
module.exports = seedlocationTags;
