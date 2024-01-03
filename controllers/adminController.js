const adminpage = (req, res, next)=> {
    res.render("admin/dashboard",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  };
  const adminProduct = (req, res, next) =>{
    try{
    res.render("admin/adminProducts",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
    }catch (error){
      console.log(error);
    }
  };
   const adminUsers =  (req, res, next)=> {
    res.render("admin/admin-users",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  };

  const adminProfile = (req, res, next) =>{
    res.render("admin/adminProfile",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  };

  const adminOrders = (req, res, next)=> {
    res.render("admin/adminOrder",{title:"Admin Here", layout:"layouts/admin-layout.ejs"})
  };







  module.exports = {
    adminpage,adminProduct,adminUsers,adminProfile,adminOrders
  }