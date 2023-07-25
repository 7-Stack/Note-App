const express = require("express");

const errorHandler = require("./middleware/errorHandler");

const app = ("express");

app.use(express.json());
app.use("/api/names", require("./routes/nameRoutes"));
app.use(errorHandler);

module.exports = app;