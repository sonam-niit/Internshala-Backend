const express = require('express');
const paypal = require('paypal-rest-sdk');
const app = express();
app.use(express.json()); //Parse JSON Bodies

paypal.configure({
    mode: 'sandbox',
    client_id: 'Enter Your Client ID',
    client_secret: 'Enter Your Secret'
})

app.post('/payment', async (req, res) => {
    var create_payment_json = {
        "intent": "order",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://return.url",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
        }]
    };

    try {
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                console.log(payment);
            }
            res.send({message:"Payment Created",payment})
        });
    } catch (error) {
        console.log(error);
        res.send("Error Occured")
    }

})
app.listen(5000, () => {
    console.log("Server Started");
})