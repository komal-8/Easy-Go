const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
let userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        trim:true
    }
});

userSchema.plugin(passportLocalMongoose); //username and password are present in passport local mongoose

let User = mongoose.model("User" , userSchema );
module.exports = User;