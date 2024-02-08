const express = require("express");
const app = express();
const stripe = require("stripe")("sk_test_51OhWx6SIpdTs3uDRejm7Bo2P7vz0uJSwr98ZEQ4zclXg6gls2IExlWVwL2uBpJcR88vuFckYGMeEkHNIzM4f9Qa900hOsPOSn3");

app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount,currency } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });
  console.log(paymentIntent);
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(5000, () => console.log("Node server listening on port 4242!"));