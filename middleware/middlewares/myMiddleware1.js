const myMiddleware1 = (req,res,next) => {
    const {token,isAdmin} = req.body;
    console.log(token);
    console.log(isAdmin);

    if(!token){
        return res.send("Kindly Login First")
    }

    req.isAdmin = isAdmin; //passing admin data to next middleware
    next();
}

module.exports = myMiddleware1