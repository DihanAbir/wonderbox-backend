const express = require("express");
const app = express();
const cors = require("cors")


// middleware
app.use(cors());
app.use(express.json())
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



// require routes
const userRoutes = require("./modules/user/userRoutes");
// const userRoutes = require("./modules/admin/");
const productRoutes = require("./modules/product/productRoutes");
const storeRoutes = require("./modules/store/storeRoutes");
const cardRoutes = require("./modules/card/cardRoutes");


// api routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/store", storeRoutes);
app.use("/api/card", cardRoutes);







app.use((err, req, res, next) => {
    if (res.headersSent) return next(err);
    res.status(400).json({ message: err.message });
});


app.get("/", (req, res) => {
    res.send("App works properly!");
});



// app export
module.exports = app





