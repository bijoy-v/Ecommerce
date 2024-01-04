const Product = require("../models/productModel");

const adminpage = (req, res, next)=> {
  try {
    res.render("admin/dashboard",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  } catch (error) {
    console.log(error);
  }
  };
  const adminProduct = async (req, res, next) =>{
    try{
       const products = await Product.find({});
    res.render("admin/adminProducts",{title:"Admin Here", layout:"layouts/admin-layout.ejs",products})
    }catch (error){
      console.log(error);
    }
  };
   const adminUsers =  (req, res, next)=> {
    try {
    res.render("admin/admin-users",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
    } catch (error) {
      console.log(error);
    }
  };

  const adminProfile = (req, res, next) =>{
    try {
    res.render("admin/adminProfile",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
    } catch (error) {
      console.log(error);
      
    }
  };

  const adminOrders = (req, res, next)=> {
    try {
    res.render("admin/adminOrder",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
    } catch (error) {
      console.log(error);
      
    }
  };







  module.exports = {
    adminpage,adminProduct,adminUsers,adminProfile,adminOrders
  }