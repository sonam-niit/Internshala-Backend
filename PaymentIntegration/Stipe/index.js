const express= require('express');
const stripe= require('stripe')('sk_test_51OhWx6SIpdTs3uDRejm7Bo2P7vz0uJSwr98ZEQ4zclXg6gls2IExlWVwL2uBpJcR88vuFckYGMeEkHNIzM4f9Qa900hOsPOSn3');
const app= express();
app.use(express.json()); //Parse JSON Bodies

app.post('/stripe',async(req,res)=>{
    const {amount,currency,source,description}=req.body;
    try {
      //  const token= await stripe.tokens.retrieve(source);
        const charge= await stripe.charges.create({
            amount,currency,source,description
        })
        res.status(200).json({message:"Payment Successful",charge})
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Payment Failed"})
    }
})
app.listen(5000,()=>{
    console.log("Server Started");
})