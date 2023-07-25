const express = require("express");



//@desc Get all  names
//@route POST /api/names
//@access public
const getNames = (req, res) => {
    res.status(200).json({ Message: "Get all names" });
};

//@desc Create new name
//@route POST /api/names
//@access public
const createName =((req, res) => {
    console.log("The request body is :", req.body);
    const { name, author, numberOfPages  } = req.body;
    if (!name || !author || !numberOfPages) {
        res.status(400);
        throw new Error("You must enter all fields!");
    }
    res.status(201).json({ Message: "Create new name" });
});

//@desc Get name
//@route POST /api/names/:id
//@access public
const getName =((req, res) => {
    res.status(200).json({ Message: "Get name" });
});

//@desc Update name
//@route PUT /api/names/:id
//@access public
const updateName =((req, res) => {
    res.status(200).json({ Message: "Update name" });
});

//@desc Delete name
//@route DELETE /api/names/:id
//@access public
const deleteName =((req, res) => {
    res.status(200).json({ Message: "Delete name" });
});

module.exports = {
    getNames,
    createName,
    getName,
    updateName,
    deleteName,
};