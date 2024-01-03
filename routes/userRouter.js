const express = require('express');
const { homepage } = require('../controllers/userController');
const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', homepage);

userRouter.get('/about', function(req, res, next) {
  res.render("user/about",{title:"about",layout:"layouts/sidebar"})
});

userRouter.get('/product', function(req, res, next) {
  res.render("user/userProducts",{title:"about",layout:"layouts/layout"})
});

userRouter.get('/cart', function(req, res, next) {
  res.render("user/userCart",{title:"about",layout:"layouts/layout"})
});

userRouter.get('/wishlist', function(req, res, next) {
  res.render("user/userWishlist",{title:"about",layout:"layouts/layout"})
});


module.exports = userRouter;
