const { NotAdminError } = require("../CustomErrors/NotAdmin");

const isAdmin= (req,res,next)=>{

    const {isAdmin}=req.body;
    
    if(!isAdmin){
        throw new NotAdminError();
      //return res.send("You don't have any permission to access admin Dashboard")
    }
    //if user is admin then allow to access dashboard
    next();
}

module.exports=isAdmin;