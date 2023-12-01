const mongoose=require('mongoose');

let carSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    }
})

let Car = mongoose.model('Car',carSchema);
module.exports = Car;