const express = require("express");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use("/api/notes", require("./routes/noteRoutes"));
app.use(errorHandler);

module.exports = app;