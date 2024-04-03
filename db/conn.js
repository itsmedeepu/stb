const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI)
  .then((resp) => {
    console.log("connected ");
  })
  .catch((err) => {
    console.log("data base connection error" + err);
  });
