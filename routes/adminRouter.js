const express = require('express');
const adminRouter = express.Router();

/* GET users listing. */

adminRouter.get('/', function(req, res, next) {
  res.render("admin/dashboard",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
});

adminRouter.get('/products', function(req, res, next) {
  try{
  res.render("admin/adminProducts",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  }catch (error){
    console.log(error);
  }
});
adminRouter.get('/users', function(req, res, next) {
  res.render("admin/admin-users",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
});

adminRouter.get('/profile', function(req, res, next) {
  res.render("admin/adminProfile",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
});

adminRouter.get('/orders', function(req, res, next) {
  res.render("admin/adminOrder",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
});



module.exports = adminRouter;
