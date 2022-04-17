const db = require("../config/database");

exports.createProduct = async (req, res) => {
  const { productname, quantity, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)",
    [productname, quantity, price]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { productname, quantity, price }
    },
  });
};

exports.listAllProducts = async (req, res) => {
  const response = await db.query('SELECT * FROM products ORDER BY productname ASC');
  res.status(200).send(response.rows);
}