"use strict";
const mongoose = require("mongoose");

// Require all models
const db = require("../models");


module.exports = function (app) {

    // Route for getting all books
    app.get("/api/books", (req, res) => {
        // Grab every document in the Books collection
        db.Book.find({})
            .then(function (dbBook) {
                // If we were able to successfully find Articles, send them back to the client with their notes
                res.json(dbBook);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post("/api/addBook", (req, res) => {
        const newBook = req.body.book;
        let book = new db.Book(newBook);
 
        book.save({book})
            .then( (dbBook) => {
                // If we were able to successfully find Articles, send them back to the client with their notes
                res.json(dbBook);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post("/api/deleteBook", (req, res) => {
        const _id = req.body._id;
 
        db.Book.deleteOne({_id: _id})
            .then( (dbBook) => {
                // If we were able to successfully find Articles, send them back to the client with their notes
                res.json(dbBook);
            })
            .catch((err) => {
                res.json(err);
            });
    });


};