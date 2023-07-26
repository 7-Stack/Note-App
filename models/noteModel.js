const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    name: {
        type: String,
        required: (true, "please add the note name"),
    },
    author: {
        type: String,
        required: (true, "please proide the note author"),
    },
    numberOfPages: {
        type: String,
        required: (true, "please add the number of note pages")
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);