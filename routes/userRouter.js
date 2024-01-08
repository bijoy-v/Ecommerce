const express = require('express');
const { homepage, about, cartpage, wishlistpage, productsPage, loginPage, registerPage} = require('../controllers/userController');
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

 


module.exports = userRouter;
