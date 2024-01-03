const addProduct = function(req, res, next) {
    try {
      console.log(req.body);
      //database
      
    } catch (error) {
      console.log(error);
    }
    // res.render("admin/adminOrder",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  }

  const productAdd =(req, res, next) =>{
    try{
    res.render("admin/addProduct",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
    }catch (error){
      console.log(error);
    }
  }

  module.exports = {
    addProduct,productAdd
}