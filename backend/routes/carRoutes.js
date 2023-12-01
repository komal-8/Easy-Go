const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
// const { isLoggedIn } = require('../middleware');
const Book = require('../models/Book');


//show all Cars --> Index page
router.get('/cars', async(req,res)=>{
    let allCars = await Car.find({});
    res.render('cars/index',{allCars})
})

//form to add new car
router.get('/cars/new',(req,res)=>{
    res.render('cars/new');
})

//add new car to database
router.post('/cars',async(req,res)=>{
    let {name,img,price,desc}=req.body;
    await Car.create({name,img,price,desc});
    // req.flash('success ','item added successfully')
    res.redirect('/cars')
})

//show  aparticular car
router.get('/cars/:id',async(req,res)=>{
    let {id}=req.params;
    let car=await Car.findById(id);
    res.render('cars/show',{car});
})
//edit a particular car(vehicle)
router.get('/cars/:id/edit',async(req,res)=>{
    let {id}=req.params;
    let car=await Car.findById(id);
    res.render('cars/edit',{car});
})

//update the changes in db
router.patch('/cars/:id',async(req,res)=>{
    let {id}=req.params;
    let {name,img,price,desc} = req.body;
    await Car.findByIdAndUpdate(id,{name,img,price,desc});
    // req.flash('success','item edited successfully')
    res.redirect(` /cars/${id}`);// show particular car

})

router.delete('/cars/:id'  , async(req,res)=>{
    let {id} = req.params;
    await Car.findByIdAndDelete(id);
    req.flash('success','product deleted successfully')
    res.redirect('/cars');
})

//car booking page
router.get('/bookcar',(req,res)=>{
    res.render('usercars/booking');
})

router.post('/bookcar',async(req,res)=>{
    let {startinglocation,destination,time,date} = req.body;
    await Book.create({startinglocation,destination,time,date});
    req.flash('success ','Booking Confirmed !')
    res.redirect('/cars')
})

module.exports = router;