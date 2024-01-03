const express = require('express');
const { homepage, about, product, cartpage, wishlistpage } = require('../controllers/userController');
const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', homepage);

userRouter.get('/about', about);

userRouter.get('/product', product);

userRouter.get('/cart', cartpage);

userRouter.get('/wishlist',wishlistpage );


module.exports = userRouter;
