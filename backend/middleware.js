const isLoggedIn = ((req,res,next) =>{ // to allow only authenticated users to see products page
    if(!req.isAuthenticated){ // not logged in
        req.flash('error','You need to login !')
        return res.redirect('/login')
    }
    next();
});

// module.exports={isLoggedIn};