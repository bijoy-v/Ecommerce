const loginModel = require("../models/loginModel");


const loginPage = async (req, res, next)=> {
    try {
        console.log(req.body);
    // res.render("user/loginPage",{title:"Login",login})
    const login = await loginModel.create({
        email:req.body?.email,
        password:req.body?.password
    })
    console.log("login",loginPage);
    res.json("Login successfully")
    
    } catch (error) {
      console.log(error); 
    }
  }

  module.exports ={
    loginPage
  }