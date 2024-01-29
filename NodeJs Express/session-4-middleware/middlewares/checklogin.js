const checkLogin=(req,res,next)=>{
    console.log("Checking user Login");
    next();
}
module.exports=checkLogin;