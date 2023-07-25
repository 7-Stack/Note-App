const express = require("express");
const router = express.Router();
const {
    getNames,
    createName,
    getName,
    updateName,
    deleteName,
} = require("../controllers/nameControllers")

router.post ("/", createName);
router.get("/", getNames);
router.get("/:id", getName);
router.put("/:id", updateName);
router.delete("/:id", deleteName);

module.exports = router;