// require(express-async-errors);
// const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = require("./app");

const port = process.env.PORT || 5007;


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});