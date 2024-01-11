const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
},
product:{
    type:mongoose.Schema.Types.ObjectId
}
})
 const WishlistModel = mongoose.model('wishlist',wishlistSchema);
 module.exports = WishlistModel