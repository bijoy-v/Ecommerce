const CatagoryModel = require("../models/catagoryModel");
const ProductModel = require("../models/productModel");

const addProduct =  async function(req, res, next) {
    try {
      console.log(req.body);
      //database
      const images = req.files?.map((obj) => (obj.filename))

      const newProduct=await ProductModel.create({
        name:req.body?.productName,
        price:req.body.price,
        color:req.body.color,
        description:req.body.description,
        images:images,
        category:req.body.category
      })
      console.log("product",newProduct);
      res.json("product added");
    } catch (error) {
      console.log(error);
    }
  }
    // res.render("admin/adminOrder",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  

  const addProductPage = async (req, res, next) =>{
    try{
  const catagories =await CatagoryModel.find({})
    res.render("admin/addProduct",{title:"Admin Here", layout:"layouts/admin-layout.ejs",catagories})
    }catch (error){
      console.log(error);
    }
  }

  module.exports = {
    addProduct,addProductPage
}