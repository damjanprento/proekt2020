const Product = require('../model/Product');

const resolvers = {
    products: () => {
        return Product.find({});
    },
    addProduct: (args) => {
        let product = new Product({
            productName: args.productName,
            productType: args.productType,
            productDescription: args.productDescription,
            purchaseDate: args.purchaseDate,
            productPrice: args.productPrice
        });
        product.save();
        return product;
    }
}

module.exports = resolvers