const dotenv = require("dotenv").config();
// require(express-async-errors);
// const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
connectDb();
const app = require("./app");

const port = process.env.PORT || 5007;


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});