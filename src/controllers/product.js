const { getProductById } = require("../model/queries");

exports.get = (req, res, next) => {
  const { id } = req.params;
  getProductById(id)
    .then(product => {
      const chosenProduct = product[0];
      console.log("chosen Product =", chosenProduct);
      res.render("productPage", { chosenProduct });
    })
    .catch(err => next(err));
};
