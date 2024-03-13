const jwt= require('jsonwebtoken');
const authenticate= async(req,res,next)=>{

    //check the Token
    const authHeader=req.headers["authorization"];
    if(!authHeader){
        return res.status(401).json({message:'Unauthorized..'})
    }
    const token= authHeader.replace('Bearer ','');
    try {
        const decode= jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        return res.status(401).json({message:'Unauthorized..'})
    }
}

module.exports=authenticate;