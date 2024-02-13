const express = require('express');
const dotenv = require('dotenv');
require('./models/dbconnect');

//configure Dot ENV
dotenv.config();
const app = express();
app.use(require('cors')())
const PORT = process.env.PORT || 5000;
app.use(express.json()); //JSON Parser
//temp check
app.get('/', (req, res) => {
    res.send('Helooo....')
})
app.use('/api/v1/user',
    require('./routes/user_routes'));

app.listen(PORT, () => {
    console.log(`Application started on PORT ${PORT}`);
})