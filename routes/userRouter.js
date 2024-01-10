const express = require('express');
const { homepage, about, productsPage, registerPage, loginPage, register, login} = require('../controllers/userController');
const { addCart, cartpage, wishlistpage } = require('../controllers/cartController');
const userRouter = express.Router();

/* GET users listing. */

userRouter.get('/', homepage);

userRouter.get('/about', about);

userRouter.get('/products', productsPage);

userRouter.get('/cart', cartpage);

userRouter.get('/wishlist',wishlistpage );

 
userRouter.get('/register',registerPage)
userRouter.post('/signup',register)



userRouter.get('/add-cart/:productId', addCart)

 
userRouter.get('/login',loginPage);

userRouter.post('/signin', login)


module.exports = userRouter;
