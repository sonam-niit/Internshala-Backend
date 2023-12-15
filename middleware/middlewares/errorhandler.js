const NotAdminError = require("../CustomErrors/NotAdmin");

const erroMiddleware= (err,req,res,next)=>{
    console.log(err);
    if(err instanceof NotAdminError){
        next(err);
    }
    else{
        res.status(500).send("Something went wrong")
    }
}

const errorMiddleware2=(err,req,res,next)=>{
    res.status(400).send('Bad request');
}

module.exports={erroMiddleware,errorMiddleware2};