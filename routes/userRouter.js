const express = require('express');
const { homepage, productsPage, registerPage, loginPage, register, login, checkoutPage} = require('../controllers/userController');
const { addCart, cartpage, wishlistpage, addWishlist, incrementQuantity } = require('../controllers/cartController');
const { userLogin } = require('../middleware/isLogin');
const userRouter = express.Router();

/* GET users listing. */

userRouter.get('/', homepage);

userRouter.get('/checkoutPage', checkoutPage);

userRouter.get('/products', productsPage);

userRouter.get('/cart',userLogin, cartpage);

userRouter.get('/wishlist',userLogin,wishlistpage );

 
userRouter.get('/register',registerPage)
userRouter.post('/signup',register)



userRouter.get('/add-cart/:productId', addCart)
userRouter.get('/add-wishlist/:productId', addWishlist)

userRouter.patch('/incrementQty/:productId',incrementQuantity)



 
userRouter.get('/login',loginPage);

userRouter.post('/signin', login)


   

module.exports = userRouter;
