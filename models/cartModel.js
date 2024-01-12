const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    totalPrice:{
        type:Number,
        default:0
    }
    
})
 const CartModel = mongoose.model('cart',cartSchema);
 
 module.exports = CartModel