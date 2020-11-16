var mongoose = require("mongoose");
mongoose.pluralize(null);           //avoid s post fix for collection. 

var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    _productId:Number,
    productName:String,
    price:Number,
    productDetail: String,
    productImg: String,
    productCompany:{ type: mongoose.Schema.Types.ObjectId, ref: 'Company'}
});

var ProductModel = mongoose.model("Product",ProductSchemaRef);

module.exports = ProductModel;