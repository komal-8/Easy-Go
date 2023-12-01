const express = require("express");
// import cors from "cors";
// const seedDB = require('./seed');
const app=express();
const path=require('path');
const methodOverride=require('method-override');
const mongoose=require('mongoose');
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/User");
const Book=require("./models/Book");
const carRoutes=require("./routes/carRoutes");
// const userCarRoutes=require('./routes/userCarRoutes');
const authRoutes=require('./routes/auth');


const flash=require("connect-flash");
const session=require("express-session");
// const login=require('./routes/login');



mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/carsdata')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log("error", err)})

// app.get("/getData",(req,res)=>{
//     res.send("hello");
// })

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//session
configSession={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        expires: Date.now() + 24*7*60*60*1000,
        maxAge:24*7*60*60*1000
    }
  }


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(session(configSession));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.currentUser=req.user; 
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})
  
// app.use(cors());
app.use(carRoutes);
app.use(authRoutes);
// app.use(userCarRoutes);

app.use(passport.initialize()); 
app.use(passport.session);//session  ---to store locally

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());  // for persistemt login
passport.deserializeUser(User.deserializeUser());   

//PASSPORT
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));


// seedDB();

const PORT=8000;
app.listen(PORT , ()=>{
    console.log(`server connected at port : ${PORT}`)
})