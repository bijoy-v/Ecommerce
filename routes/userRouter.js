const express = require('express');
const { homepage, productsPage, registerPage, loginPage, register, login, checkoutPage, checkout, listAddress, logoutButton } = require('../controllers/userController');
const { addCart, cartpage, wishlistpage, addWishlist, incrementQuantity, deleteCart, decrementQuantity } = require('../controllers/cartController');
const { userLogin } = require('../middleware/isLogin');
const userRouter = express.Router();

/* GET users listing. */

userRouter.get('/', homepage);

userRouter.get('/checkoutPage', checkoutPage);
userRouter.post('/checkOut',userLogin,checkout);

userRouter.get('/products', productsPage);

userRouter.get('/cart',userLogin, cartpage);

userRouter.get('/wishlist',userLogin,wishlistpage );

 
userRouter.get('/register',registerPage)
userRouter.post('/signup',register)



userRouter.get('/add-cart/:productId', addCart)
userRouter.get('/add-wishlist/:productId', addWishlist)

userRouter.patch('/incrementQty/:itemId',incrementQuantity)
userRouter.patch('/decrementQty/:itemId',decrementQuantity)

userRouter.delete('/deleteCartitem/:productId',deleteCart)

userRouter.get('/list-address',userLogin,listAddress )

userRouter.get('/logOut',logoutButton )





 
userRouter.get('/login',loginPage);

userRouter.post('/signin', login)


   

module.exports = userRouter;
