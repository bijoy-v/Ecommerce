const homepage =  (req, res, next) => {
  res.render("user/index", { title: "welcome" });
};
const about = (req, res, next)=> {
  res.render("user/about",{title:"about",layout:"layouts/sidebar"})
};
 const product =(req, res, next)=> {
  res.render("user/userProducts",{title:"about",layout:"layouts/layout"})
};

const cartpage =(req, res, next)=> {
  res.render("user/userCart",{title:"about",layout:"layouts/layout"})
}

const wishlistpage =(req, res, next)=> {
  res.render("user/userWishlist",{title:"about",layout:"layouts/layout"})
}
module.exports = {
    homepage,about,product,cartpage,wishlistpage

}