const mongoose = require("mongoose");

//defining Schema Class
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    description: { type: String}
});

///This creates the collection called BookList
const BookList = mongoose.model('BookList', bookSchema);
module.exports = BookList;