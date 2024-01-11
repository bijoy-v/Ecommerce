const express = require('express');
const { homepage, about, productsPage, registerPage, loginPage, register, login,  sessionData, userSession} = require('../controllers/userController');
const { addCart, cartpage, wishlistpage } = require('../controllers/cartController');
const { userLogin } = require('../middleware/isLogin');
const userRouter = express.Router();

/* GET users listing. */

userRouter.get('/', homepage);

userRouter.get('/about', about);

userRouter.get('/products', productsPage);

userRouter.get('/cart',userLogin, cartpage);

userRouter.get('/wishlist',userLogin,wishlistpage );

 
userRouter.get('/register',registerPage)
userRouter.post('/signup',register)



userRouter.get('/add-cart/:productId', addCart)

 
userRouter.get('/login',loginPage);

userRouter.post('/signin', login)


// userRouter.get('/retrieveData',userSession)

// userRouter.get('/storeData',sessionData)
  
   

module.exports = userRouter;
