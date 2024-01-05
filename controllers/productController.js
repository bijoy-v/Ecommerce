const ProductModel = require("../models/productModel");

const addProduct =  async function(req, res, next) {
    try {
      console.log(req.body);
      //database
      const newProduct=await ProductModel.create({
        name:req.body.productName,
        price:req.body.price,
        color:req.body.color,
        description:req.body.description,
      })
      console.log("product",newProduct);
      res.json(newProduct);
    } catch (error) {
      console.log(error);
    }
    // res.render("admin/adminOrder",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  }

  const addProductPage =(req, res, next) =>{
    try{

    res.render("admin/addProduct",{title:"Admin Here", layout:"layouts/admin-layout.ejs",})
    }catch (error){
      console.log(error);
    }
  }

  module.exports = {
    addProduct,addProductPage
}