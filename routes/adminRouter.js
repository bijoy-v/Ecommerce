const express = require('express');
const { addProduct, addProductPage } = require('../controllers/productController');
const { adminpage, adminProduct, adminUsers, adminProfile, adminOrders } = require('../controllers/adminController');
const adminRouter = express.Router();

/* GET users listing. */

adminRouter.get('/', adminpage);

adminRouter.get('/products',adminProduct );

adminRouter.get('/products/add', addProductPage);
adminRouter.get('/users', adminUsers);

adminRouter.get('/profile', adminProfile);

adminRouter.get('/orders', adminOrders);

adminRouter.post('/add-product', addProduct);




module.exports = adminRouter;
