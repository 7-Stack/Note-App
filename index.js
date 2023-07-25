// require(express-async-errors);
const express = require("express");
const dotenv = require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 5007;


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});