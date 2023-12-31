const ProductModel = require("../models/productModel");

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
    const products = await ProductModel.find({});
  res.render("user/userProducts",{title:"about",products})
  } catch (error) {
    console.log(error);
  }
};


const registerPage =(req, res, next)=> {
  try {
  res.render("user/register",{title:"Login",})
  } catch (error) {
    console.log(error); 
  }
}

const loginPage =(req, res, next)=> {
  try {
  res.render("user/register",{title:"Login",})
  } catch (error) {
    console.log(error); 
  }
}



module.exports = {
    homepage,about,productsPage,registerPage,loginPage

}