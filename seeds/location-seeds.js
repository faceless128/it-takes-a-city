// Require Location Model

const { Location } = require("../models");

const locationData = [
  {
    location_name: "Shelter A",
    address: "111 Alphabet Street",
    state: "Michigan",
    city: "Detroit",
    zip_code: 48201,
    location_id: 3,
  },
  {
    location_name: "Shelter B",
    address: "222 Alphabet Street",
    state: "Illinois",
    city: "Chicago",
    zip_code: 60131,
    location_id: 2,
  },
];

// Bulk create location seeds
const seedLocations = () => Location.bulkCreate(locationData);

// Export
module.exports = seedLocations;
