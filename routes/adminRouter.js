const express = require('express');
const { addProduct, addProductPage } = require('../controllers/productController');
const { adminpage, adminProduct, adminUsers, adminProfile, adminOrders, catagoryPage, addCatagory, deleteProduct } = require('../controllers/adminController');
const upload = require('../utils/fileUploads');
const adminRouter = express.Router();

/* GET users listing. */

adminRouter.get('/', adminpage);

adminRouter.get('/products',adminProduct );

adminRouter.get('/products/add',addProductPage);

adminRouter.get('/Users', adminUsers);

adminRouter.get('/profile', adminProfile);

adminRouter.get('/orders', adminOrders);

adminRouter.post('/add-product', upload.array("images",5) ,addProduct);

 adminRouter.get('/catagory',catagoryPage)

 adminRouter.post('/add-catagory', addCatagory)

 adminRouter.delete('/deleteProduct', deleteProduct)





module.exports = adminRouter;
