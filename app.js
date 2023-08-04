const express = require("express");
const connectDb = require("./config/dbConnection");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(`/api/notes`, require("./routes/noteRoutes"));
app.use(`/api/users`, require("./routes/userRoutes"));

app.get("/", (req,res) => {
    res.send()
})
app.get(`/api/v1/docs`, (req,res) => {
    res.redirect("http://localhost:5009/api/notes")
})
app.use(errorHandler);

module.exports = app;