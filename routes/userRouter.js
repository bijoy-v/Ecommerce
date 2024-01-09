const express = require('express');
const { homepage, about, productsPage, loginPage, registerPage} = require('../controllers/userController');
const { addCart, cartpage, wishlistpage } = require('../controllers/cartController');
const userRouter = express.Router();

/* GET users listing. */
// userRouter.get('/login',loginPage)

userRouter.get('/', homepage);

userRouter.get('/about', about);

userRouter.get('/products', productsPage);

userRouter.get('/cart', cartpage);

userRouter.get('/wishlist',wishlistpage );

userRouter.get('/login',loginPage);
 
userRouter.get('/user/register',registerPage)

userRouter.get('/add-cart/:productId', addCart)

 


module.exports = userRouter;
