const CatagoryModel = require("../models/catagoryModel");
const ProductModel = require("../models/productModel");

const adminpage = (req, res, next)=> {
  try {
    res.render("admin/dashboard",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  } catch (error) {
    console.log(error);
  }
  };
  const adminProduct = async (req, res, next) =>{
    try{
       const products = await ProductModel.find({});
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

  const catagoryPage =async (req, res, next)=> {
    try {
      const catagories = await CatagoryModel.find({})
      res.render("admin/catagoryPage",{title:"Admin Here", layout:"layouts/admin-layout.ejs",catagories})
    } catch (error) {
      console.log(error);
    }
  };

  const addCatagory = async (req,res,next)=>{
    try {
      const newCatagory = await CatagoryModel.create({
        name:req.body.catagory
      })
      res.json("category added")
    } catch (error) {
      
    }
  }

  const deleteProduct = async(req,res) => {
    try {
      const cartDelete = await ProductModel.deleteOne({
        _id:req.params.productId
        
      })
      return res.json({data:false});
  
      res.json({data:cartDelete})
      
    } catch (error) {
      console.log(error)
    }
  }





  module.exports = {
    adminpage,adminProduct,adminUsers,adminProfile,adminOrders,catagoryPage,addCatagory,deleteProduct
  }