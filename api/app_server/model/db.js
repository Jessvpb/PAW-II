const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/dbbuku")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    // console.error('App starting error:', err.stack);
    console.log("Connection Failed");
  });
