// Require City Model
const { City } = require("../models");

const cityData = [
  {
    name: "Denver",
    stateName: "Colorado",
  },
  {
    name: "Chicago",
    stateName: "Illinois",
  },
  {
    name: "Detroit",
    stateName: "Michigan",
  },
  {
    name: "Tampa",
    stateName: "Florida",
  },
];

// Bulk Create Comments
const seedCity = () => City.bulkCreate(cityData);

// Export
module.exports = seedCity;
