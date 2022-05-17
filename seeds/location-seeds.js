// Require Location Model

const { Location } = require("../models");

const locationData = [
  {
    location_name: "Shelter A",
    address: "111 Alphabet Street",
    state: "Michigan",
    resource_city: "Detroit",
    zip_code: 48201,
    city_id: 3,
  },
  {
    location_name: "Shelter B",
    address: "222 Alphabet Street",
    state: "Illinois",
    resource_city: "Chicago",
    zip_code: 60131,
    city_id: 2,
  },
];

// Bulk create location seeds
const seedLocations = () => Location.bulkCreate(locationData);

// Export
module.exports = seedLocations;
