const homepage =  (req, res, next) => {
  res.render("user/index", { title: "welcome" });
};

module.exports = {
    homepage,

}