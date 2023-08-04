const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add the user name"],
    },
    author: {
        type: String,
        require: [true, "Please provide the user name"],
    },
    numberOfPages: {
        type: Number,
        require: [true, "Please add the number of note pages"],
    },
    email: {
        type: String,
        require: [true, "Please add the user email address"],
        unique: [true, "user email not available"],
    },
    password: {
        type: String,
        require: [true, "Please add user password"],
    }
  }, 
  {
    timestamps: true
 }
);

module.exports = mongoose.model("user", userSchema);