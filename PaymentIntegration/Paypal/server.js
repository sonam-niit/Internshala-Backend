const express=require('express');
const paypal= require('paypal-rest-sdk');
require('dotenv').config();
const app= express();
app.use(express.json())
paypal.configure({
    mode:'sandbox',
    client_id:process.env.PAYPAL_CLIENT_ID,
    client_secret:process.env.PAYPAL_SECRET_KEY
})

app.post('/create-payment',async(req,res)=>{
    const {product,quantity}=req.body;
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": product.name,
                    "sku": product.name,
                    "price": product.price,
                    "currency": "USD",
                    "quantity": quantity
                }]
            },
            "amount": {
                "currency": "USD",
                "total": product.price * quantity
            },
            "description": "This is the payment description."
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log(payment);
            for(let i=0;i<payment.links.length;i++){
                if(payment.links[i].rel==='approval_url'){
                  return res.redirect(payment.links[i].href);
                }
            }
        }
    });
     
})

app.get('/success',(req,res)=>{
    const payerId=req.query.PayerID;
    const paymentId=req.query.paymentId;
    const execute_json={
        payer_id:payerId,
        transactions:[{
            amount:{
                currency:'USD',
                total:'2500'
            }
        }]
    }
    paypal.payment.execute(paymentId,execute_json,(err,payment)=>{
        if(err){
            console.log(err);
            throw err;
        }else{
            console.log(JSON.stringify(payment));
            res.send("Payment Successfull")
        }
    })
})

app.get('/error',(req,res)=>{
    res.send('Payment Cancelled')
})

app.listen(5000,()=>{
    console.log("server started");
})