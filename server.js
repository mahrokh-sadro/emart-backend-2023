const express = require("express");
const mongoose = require("mongoose");

const app = express();
const MONGO_DB_CONNECTION_STRING = `mongodb+srv://661370:661370@cluster0.8i4ns.mongodb.net/ShopCartDB?retryWrites=true&w=majority`;

//retirieve
app.get("/", (req, res) => {
  res.json({
    message: "main page",
  });
});

app.use("*", (req, res) => {
  res.status(404).json({
    message: "page not found",
  });
});

const HTTP_PORT = process.env.PORT || 5000;

app.listen(HTTP_PORT, () => {
  console.log(`app listening on `);

  mongoose
    .connect(MONGO_DB_CONNECTION_STRING)
    .then(() => {
      console.log("connected to db " + HTTP_PORT);
    })
    .catch((err) => {
      console.log(err);
    });
});
