const { getAllPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets()); /* returns 200 by default */
}

module.exports = {
  httpGetAllPlanets,
};
