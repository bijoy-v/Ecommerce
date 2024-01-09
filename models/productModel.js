const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    color:{
        type:String,
    },
    description:{
        type:String,
        required:true,
    },
    images:[String],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"catagory",
        required:true,
    }
})

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel