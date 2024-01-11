const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const session = require('express-session');
const WishlistModel = require("../models/wishlistModel");

const homepage = (req, res, next) => {
  try {
    res.render("user/index", { title: "welcome" });
  } catch (error) {
    console.log(error);
  }
};
const about = (req, res, next) => {
  try {
    res.render("user/about", { title: "about" });
  } catch (error) {
    console.log(error);
  }
};
const productsPage = async (req, res, next) => {
  try {
    const products = await ProductModel.find({});
    res.render("user/userProducts", { title: "about", products });
  } catch (error) {
    console.log(error);
  }
};

const registerPage = (req, res, next) => {
  try {
    res.render("user/register", { title: "Login" });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashPassword,
    });
    console.log("user", newUser);
    res.json("Register successfully");
  } catch (error) {
    console.log(error);
  }
};

const loginPage = (req, res, next) => {
  try {
    console.log(req.session);
    if(req.session.userLogin){
      res.redirect("/")
    }else{
      res.render("user/loginPage", { title: "Login" });
    }
  } catch (error) {
    console.log(error);
  }
};
const login = async (req,res)=>{
  try {
    const {email,password} = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({
      email:email
    })
    if(!user){
      throw("user not found")
      }
    const verified = await bcrypt.compare(password,user.password);
    if(!verified){
      throw ("wrong password")
    }
    console.log(user);
    req.session.username=user?.name;
    req.session.email=user?.email;
    req.session.userId=user?._id;
    req.session.userLogin=true;
    res.redirect("/")
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
  homepage,
  about,
  productsPage,
  registerPage,
  loginPage,
  register,
  login,
 
};
