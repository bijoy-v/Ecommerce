const express = require('express');
const { addProduct, addProductPage } = require('../controllers/productController');
const { adminpage, adminProduct, adminUsers, adminProfile, adminOrders, catagoryPage, addCatagory } = require('../controllers/adminController');
const adminRouter = express.Router();

/* GET users listing. */

adminRouter.get('/', adminpage);

adminRouter.get('/products',adminProduct );

adminRouter.get('/products/add', addProductPage);

adminRouter.get('/users', adminUsers);

adminRouter.get('/profile', adminProfile);

adminRouter.get('/orders', adminOrders);

adminRouter.post('/add-product', addProduct);

 adminRouter.get('/catagory',catagoryPage)

 adminRouter.post('/add-catagory', addCatagory)




module.exports = adminRouter;
