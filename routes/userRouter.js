const express = require('express');
const { homepage, about, cartpage, wishlistpage, productsPage } = require('../controllers/userController');
const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', homepage);

userRouter.get('/about', about);

userRouter.get('/products', productsPage);

userRouter.get('/cart', cartpage);

userRouter.get('/wishlist',wishlistpage );


module.exports = userRouter;
