const express = require('express');
const adminRouter = express.Router();

/* GET users listing. */

adminRouter.get('/', function(req, res, next) {
  res.render("admin/dashboard",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
});

module.exports = adminRouter;
