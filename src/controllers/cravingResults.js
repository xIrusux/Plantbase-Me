const { getProductsByCraving } = require("../model/queries");

exports.get = (req, res) => {
  const { craving } = req.params;
  getProductsByCraving(craving)
    .then(allProducts => res.render("results", { allProducts }))
    .catch(err => next(err));
};