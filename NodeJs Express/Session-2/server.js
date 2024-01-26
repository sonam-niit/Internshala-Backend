const express = require('express');
const dotenv= require('dotenv');

require('./util/dbconnect');//get DB Connection

dotenv.config();
const PORT= process.env.PORT;
const app= express();
//Read JSON DATA //JSON Parser
app.use(express.json());

app.use("/api/v1/user",require('./routes/user.route'));

app.listen(PORT, ()=>{
    console.log(`Application is running on PORT ${PORT}`);
})