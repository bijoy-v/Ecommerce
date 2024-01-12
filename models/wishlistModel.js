const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true,
},
product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
    required:true,
}
})
 const WishlistModel = mongoose.model('wishlist',wishlistSchema);
 module.exports = WishlistModel