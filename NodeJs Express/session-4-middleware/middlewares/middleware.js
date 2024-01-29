const checkQueryParam=(req,res,next)=>{

    const paramValue= req.query.token;
    if(!paramValue){
        res.status(400).send("Missing Token")
    }else{
        req.name=paramValue;
        next();
    }
}
module.exports=checkQueryParam;