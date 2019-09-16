const connection = require("../database/db_connection");

module.exports = rating_comment => {
  const { product_id, rating, comment, tags, votes } = rating_comment;
  return connection.query(
    "INSERT INTO ratings (product_id, rating, comment, tags, votes) VALUES ($1, $2, $3, $4, $5)",
    [product_id, rating, comment, tags, votes]
  );
};