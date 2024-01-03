const addProduct = function(req, res, next) {
    try {
      console.log(req.body);
      //database
      
    } catch (error) {
      console.log(error);
    }
    // res.render("admin/adminOrder",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  }

  module.exports = {
    addProduct,
}