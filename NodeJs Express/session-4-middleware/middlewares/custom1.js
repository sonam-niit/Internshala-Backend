const customMiddleware=(req,res,next)=>{
    console.log("Middleware executed ",req.originalUrl);
    next(); //call next middleware or expected route
}

module.exports=customMiddleware;