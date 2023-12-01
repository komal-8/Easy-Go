const mongoose=require('mongoose');

let bookSchema=mongoose.Schema({
    startinglocation:{
        type:String,
        required:true,
        trim:true
    },
    destination:{
        type:String,
        trim:true
    },
    date:{
        type:Number,
        required:true
    },
    time:{
        required:true,
        type:Number,
        // trim:true
    }
})

let Book = mongoose.model('Book',bookSchema);
module.exports = Book;