const ProductsModel = require('../models/products.model');

class ProductService {

    async findAll () {
        return await ProductsModel.getAll();
    }

    async findById(id) {
        return await ProductsModel.getById(id);
    }

}


module.exports = new ProductService();