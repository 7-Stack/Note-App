const express = require("express");
const router = express.Router();
const {
    getNotes,
    createNote,
    getNote,
    updateNote,
    deleteNote,
} = require("../controllers/noteController");
const validateToken = require("../middleware/validateTokenHandler");

router.post ("/", createNote);
router.get("/", getNotes);
router.get("/:id", getNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;