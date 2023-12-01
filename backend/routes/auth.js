const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router();


// to show signup form
router.get('/register',(req,res)=>{
    res.render('register/signup');
})

// to actually register a user in DB

router.post('/register',async(req,res)=>{
    let{email,username,password}=req.body;
    const user=new User({email,username});
    const newUser = await User.register(user,password );
    res.redirect('/login')
    // res.send(newUser);
    // req.login(newUser,function(err){
    //    if(err){ return next(err) } 
    //    req.flash('success','Registered successfully');
    //    return res.redirect('/cars')
       
    // })
    
     
})

//to show login page
router.get('/login',(req,res)=>{
    res.render('register/login');
})

//to login with DB
router.post('/login',
    passport.authenticate('local',{ 
        failureRedirect: '/login' ,
        failureMessage: true 
    }),
    (req, res)=> {
        req.flash('success' , 'welcome back');
        res.redirect('/cars');
    })


//logout
router.get('/logout',(req,res)=>{
    ()=>{
        req.logOut();
    }
    req.flash('success' , 'successfully logged out');
    res.redirect('/login');
})

module.exports = router;

