const express = require('express');
const { homepage, about, productsPage, registerPage} = require('../controllers/userController');
const { addCart, cartpage, wishlistpage } = require('../controllers/cartController');
const { loginPage } = require('../controllers/loginController');
const userRouter = express.Router();

/* GET users listing. */
// userRouter.get('/login',loginPage)

userRouter.get('/', homepage);

userRouter.get('/about', about);

userRouter.get('/products', productsPage);

userRouter.get('/cart', cartpage);

userRouter.get('/wishlist',wishlistpage );

 
userRouter.get('/user/register',registerPage)

userRouter.get('/add-cart/:productId', addCart)

 
userRouter.post('/login',loginPage);


module.exports = userRouter;
