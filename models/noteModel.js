const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: (true, "please add the note name"),
    },
    author: {
        type: String,
        require: (true, "please provide the note author"),
    },
    numberOfPages: {
        type: String,
        require: (true, "please add the number of note pages")
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);