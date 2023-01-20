const express = require("express");

const customersController = require("./controllers/CustomersController.js");
const AuthController = require("./controllers/AuthController.js");

const app = express();

//retirieve
app.get("/", (req, res) => {
  res.json({
    message: "main page",
  });
});

app.use("/auth", AuthController);
app.use("/", customersController);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "page not found",
  });
});

const HTTP_PORT = process.env.PORT || 5000;
const MONGO_DB_CONNECTION_STRING = `mongodb+srv://661370:661370@cluster0.8i4ns.mongodb.net/ShopCartDB?retryWrites=true&w=majority`;

app.listen(HTTP_PORT, () => {
  console.log(`app listening on `);
});
