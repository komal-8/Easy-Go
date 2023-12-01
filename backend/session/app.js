const express=require("express");
const app=express();
const session= require("express-session");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))


app.get('/',(req,res)=>{
    res.send("Welcome to session");
})

app.get('/viewcount',(req,res)=>{ // on refreshing the server it will again re start with 1 
    if(req.session.count){
        req.session.count+=1;
    }
    else{
        req.session.count=1;
    }
    res.send(`you visited the site ${req.session.count} times`);
})


app.get('/setname',(req,res)=>{
    req.session.username='komal mangal';
    res.redirect('/greet');
})

app.get('/greet',(req,res)=>{
    let {username="anonymous"}=req.session;
    res.send(`hi from ${username}`);
})



app.listen(5000,()=>{
    console.log("server connected ")
})