const Product = require("../models/productModel");

const homepage =  (req, res, next) => {
  try {
  res.render("user/index", { title: "welcome" });
  } catch (error) {
    console.log(error);
  }
};
const about = (req, res, next)=> {
  try {
  res.render("user/about",{title:"about",})
  } catch (error) {
    console.log(error);
  }
};
 const productsPage = async(req, res, next)=> {
  try {
    const products = await Product.find({});
  res.render("user/userProducts",{title:"about",products})
  } catch (error) {
    console.log(error);
  }
};

const cartpage =(req, res, next)=> {
  try {
  res.render("user/userCart",{title:"about",})
  } catch (error) {
    console.log(error);
  }
}

const wishlistpage =(req, res, next)=> {
  try {
  res.render("user/userWishlist",{title:"about",layout:"layouts/layout"})
  } catch (error) {
    console.log(error);
    
  }
}
module.exports = {
    homepage,about,productsPage,cartpage,wishlistpage

}