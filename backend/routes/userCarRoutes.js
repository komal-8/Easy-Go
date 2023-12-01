const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Book = require('../models/Book');



//show all Cars --> Index page
router.get('/user/cars', async(req,res)=>{
    let allCars = await Car.find({});
    res.render('usercars/index',{allCars})
})


//show  aparticular car
router.get('/user/cars/:id',async(req,res)=>{
    let {id}=req.params;
    let car=await Car.findById(id);
    res.render('usercars/show',{car});
})

//car booking page
router.get('/bookcar',(req,res)=>{
    res.render('usercars/booking');
})

router.post('/bookcar',async(req,res)=>{
    let {startinglocation,destination,time,date} = req.body;
    await Book.create({startinglocation,destination,time,date});
    req.flash('success ','Booking Confirmed !')
    res.redirect('/user/cars')
})

module.exports = router;