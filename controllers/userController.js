const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const session = require("express-session");
const WishlistModel = require("../models/wishlistModel");
const { name } = require("ejs");

const homepage = (req, res, next) => {
  try {
    res.render("user/index", { title: "welcome" });
  } catch (error) {
    console.log(error);
  }
};
const checkoutPage = async (req, res, next) => {
  // try {
  //   res.render("user/checkoutPage", );
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    const userId = req.session.userId;
    const addingAddress = await UserModel.findOne({
      _id: userId,
    });
    console.log(addingAddress.address, "6666");
    res.render("user/checkoutPage", { addingAddress: addingAddress.address });
  } catch (error) {
    console.log(error);
  }
};
const checkout = async (req, res) => {
  try {
    const userId = req.session.userId;
    const { address, pincode, district, state } = req.body;
    const newAddress = {
      address,
      pincode,
      district,
      state,
    };
    console.log(newAddress);
    const updateAddress = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { address: newAddress } }
    );
    res.json("address added");
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
    const existUser = await UserModel.findOne({
      email: email,
    });
    if (existUser) {
      return res.status(404).json({ error: "email alredy exist" });
      
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashPassword,
    });

    return res.status(200).json({ status:true});

  } catch (error) {
    console.log(error);
  }
};

const loginPage = (req, res, next) => {
  try {
    if (req.session.userLogin) {
      res.redirect("/");
    } else {
      res.render("user/loginPage", { title: "Login" });
    }
  } catch (error) {
    console.log(error);
  }
};
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await UserModel.findOne({
//       email: email,
//     });
//     if (!user) {
//       throw "user not found";
//     }
//     const verified = await bcrypt.compare(password, user.password);
//     if (!verified) {
//       throw "wrong password";
//     }
//     req.session.username = user?.name;
//     req.session.email = user?.email;
//     req.session.userId = user?._id;
//     req.session.userLogin = true;
//     res.redirect("/");
//   } catch (error) {
//     console.log(error);
//   }
// };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
      email: email,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const verified = await bcrypt.compare(password, user.password);
    if (!verified) {
      return res.status(401).json({ error: "Wrong password" });
    }

    req.session.username = user?.name;
    req.session.email = user?.email;
    req.session.userId = user?._id;
    req.session.userLogin = true;
      return res.status(200).json({ status: true });
      
    // return res.redirect("/"); // Redirect on success
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const listAddress = async (req, res, next) => {
  try {
    const userId = req.session.userId;
    const addingAddress = await UserModel.findOne({
      _id: userId,
    });
    console.log(addingAddress);
    res.render("user/checkoutPage", { addingAddress });
  } catch (error) {
    console.log(error);
  }
};

const logoutButton = async (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homepage,
  checkoutPage,
  checkout,
  productsPage,
  registerPage,
  loginPage,
  register,
  login,
  listAddress,
  logoutButton,
};
