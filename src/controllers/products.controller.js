const ProductService = require("../services/product.service");

class ProductsController {

    async show(req, res) {
      return res.status(200).json(await ProductService.findAll());
    }

    async showById(req, res) {
      return res.status(200).json(await ProductService.findById(req.params.id));
    }

    // create(req, res) {
    //     res.send('Create Product');
    // }

    // update(req, res) {
    //     res.send('Update Product ' + req.params.id);
    // }

    // delete(req, res) {
    //     res.send('Delete Product ' + req.params.id);
    // }

}

module.exports = new ProductsController();