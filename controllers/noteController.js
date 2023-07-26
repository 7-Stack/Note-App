const express = require("express");
const Note = require("../models/noteModel");
//@desc Get all  notes
//@route POST /api/notes
//@access public
const getNotes = async(req, res) => {
    const notes = await Note.find();
    res.status(200).json(notes);
};

//@desc Create new note
//@route POST /api/notes
//@access public
const createNote = async(req, res) => {
    console.log("The request body is :", req.body);
    const { name, author, numberOfPages  } = req.body;
    if (!name || !author || !numberOfPages) {
        res.status(400);
        throw new Error("You must enter all fields!");
    }
    const note = await Note.create({
        name,
        author,
        numberOfPages,
    });
    res.status(201).json(note);
};

//@desc Get note
//@route POST /api/notes/:id
//@access public
const getNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    if(!note) {
        res.status(404);
        throw new Error ("Note not found");
    }
    res.status(200).json(note);
};

//@desc Update note
//@route PUT /api/notes/:id
//@access public
const updateNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    if(!note) {
        res.status(404);
        throw new Error ("Note not found");
    }
    const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.status(200).json(updatedNote);
};

//@desc Delete note
//@route DELETE /api/notes/:id
//@access public
const deleteNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    if(!note) {
        res.status(404);
        throw new Error ("Note not found");
       }
       await note.remove();
    res.status(200).json(note);
};

module.exports = {
    getNotes,
    createNote,
    getNote,
    updateNote,
    deleteNote,
};