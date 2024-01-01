const express = require('express');
const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  res.render("user/index",{title:"welcome"})
});

userRouter.get('/about', function(req, res, next) {
  res.render("user/about",{title:"about",layout:"layouts/sidebar"})
});



module.exports = userRouter;
