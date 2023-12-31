const { Product } = require('../models');

const getProducts = async (req, res) => {
  const filters = req.body;
  try {
    const data = await Product.findAll(filters);
    const products = data.map(({ dataValues: product }) => {
      product.shouldRestock = 'no';
      if (product.stock < product.min_stock) {
        product.shouldRestock = 'yes';
      }
      if (product.stock === product.min_stock) {
        product.shouldRestock = 'shortly';
      }
      return product;
    });
    console.log(products);
    return res
      .json({
        status: 'success',
        data: products,
      })
      .status(200);
  } catch (error) {
    console.log(error);
    return res
      .json({
        status: 'error',
        error: error.message,
      })
      .status(400);
  }
};

exports.getProducts = getProducts;