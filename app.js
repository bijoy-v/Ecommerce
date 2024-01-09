const dotenv = require("dotenv")
dotenv.config()
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const expresslayouts = require("express-ejs-layouts");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");

const app = express();

// view engine setup
// console.log("path",__dirname);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database error", error);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expresslayouts);
app.set("layout", "./layouts/layout.ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "/public/stylesheets")));
app.use("/img", express.static(path.join(__dirname, "/public/images")));
app.use("/js", express.static(path.join(__dirname, "/public/javascripts")));


//routes
app.use("/", userRouter);
app.use("/admin", adminRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  } else {
    console.log("server error", error);
  }
});
