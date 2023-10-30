const productsController = require('../controller/products');

module.exports = (app) => {
  app.get('/products', productsController.getProducts);
};